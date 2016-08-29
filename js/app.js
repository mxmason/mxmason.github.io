function populateStorage() {
    var checkedContrastVal = (typeof $('input[name="high-contrast"]:checked').val() === 'undefined') ? "no" :  $('input[name="high-contrast"]:checked').val() ;
    localStorage.setItem('isHighContrast', checkedContrastVal);

    setPrefs();
}

function setPrefs() {
    var contrastPref = localStorage.getItem('isHighContrast');

    if (contrastPref === "yes") {
        $('input[name="high-contrast"][value="yes"]').attr('checked', 'checked');
        $('body').addClass('high-contrast');
    } else {
        $('input[name="high-contrast"][value="no"]').attr('checked', 'checked');
        $('body').removeClass('high-contrast');
    }
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
    $('#prefs-btn').on('click', function(){
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
});
