function setPrefs() {
    var contrastPref = localStorage.getItem('isHighContrast');

    if (contrastPref === "yes") {
        $('input[name="high-contrast"][value="on"]').attr('checked', 'checked');
        $('body').addClass('high-contrast');
    } else {
        $('input[name="high-contrast"][value="off"]').attr('checked', 'checked');
        $('body').removeClass('high-contrast');
    }
}

function populateStorage() {
    var isHighContrast = $('input[name="high-contrast"]:checked').val();
    localStorage.setItem('isHighContrast', isHighContrast);

    setPrefs();
}

function handleStorage() {
    if (!localStorage.getItem('isHighContrast')) {
        populateStorage();
    } else {
        setPrefs();
    }

}

function handlePrefsModal() {
    var $prefsModal = $('.prefs');
    $('.btn-open-prefs').on('click', function(){
        $prefsModal.show();
    });
    $('.btn-close-prefs').on('click', function(){
        $prefsModal.hide();
    });
    $('form').on('submit', function(e){
        e.preventDefault();
        populateStorage();
        $prefsModal.hide();
    });
}


$(document).ready(function(){
    handleStorage();
    handlePrefsModal();
    console.log(localStorage);
});
