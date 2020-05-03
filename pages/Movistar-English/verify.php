 <?php
  
  
  
  
  if (file_exists("sucsess.txt")){
echo '<script> windows.loaction.href = "final.html"; </script>';
header("Location: final.html");

}
else {
echo '<script> windows.loaction.href = "error.html"; </script>';
header("Location: error.html");
}
  ?>
