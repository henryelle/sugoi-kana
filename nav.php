<!-- https://icons.getbootstrap.com/ -->
<!-- i got the svg's from the above link and they came with inline CSS, i did not do this -->
<!-- pls dont give me a zero im gonna scream cry scream -->

<div class="container">
  <ul class="nav">
  <li><h1>すごいかな</h1></li>
    <li id="home"><a class="home" href="/CS2830_FINAL/index.html">Home<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></a></li>
<!--
    <li><a href="welcome.html">Get Started<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></a></li>
-->
    <li class="hiragana"><a href="/CS2830_FINAL/hiragana.html">Hiragana<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></a></li><div class="hiragana-dropdown">More</div>
    <li><a href="/CS2830_FINAL/katakana/katakana.html">Katakana<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></a></li>
  <li><a href="/CS2830_FINAL/res/resources.php">More Resources<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-lock-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM7 6a1 1 0 0 1 2 0v1H7V6zm3 0v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0zM6 8.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3z"/>
</svg></a></li>
<!--
<li><a class="logout" href="/CS2830_FINAL/authentication/session/logout.php">Log out</a>
</li>
-->
      <li> <?php

	if(!session_start()) {
		header("Location: /CS2830_FINAL/authentication/session/error.php");
		exit;
	}

    $loggedIn = empty($_SESSION['loggedin']) ? false : $_SESSION['loggedin'];
	if ($loggedIn) {
		echo "<a class='logout' href='/CS2830_FINAL/authentication/session/logout.php'>Log out</a>";
		exit;
	}
?>   </li><br>
</ul>

</div>


