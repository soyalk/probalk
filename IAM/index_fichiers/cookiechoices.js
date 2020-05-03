
    var cookieName = 'displayCookieConsent';
    var cookieConsentId = 'cookieChoiceInfo';
    var dismissLinkId = 'cookieChoiceDismiss';


    function _dismissLinkClick() {
      _saveUserPreference();
      _removeCookieConsent();
      return false;
    }



    function _removeCookieConsent() {
      var cookieChoiceElement = document.getElementById(cookieConsentId);
      if (cookieChoiceElement != null) {
        cookieChoiceElement.parentNode.removeChild(cookieChoiceElement);
      }
    }

    function _saveUserPreference() {
      // Set the cookie expiry to one year after today.
      var expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      document.cookie = cookieName + '=cookie; expires=' + expiryDate.toGMTString()+'; path=/';
    }

        function _shouldDisplayConsent() {
      // Display the header only if the cookie has not been set.
      return !document.cookie.match(new RegExp(cookieName + '=([^;]+)'));
    }

        function display()
        {
        if(_shouldDisplayConsent())
        {
        $("#cookieChoiceInfo").show()
        }
        else { $("#cookieChoiceInfo").hide(); }
        }

