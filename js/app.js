function handleStorage() {
    if (!localStorage.getItem('isHighContrast')) {
        populateStorage();
    } else {
        setPrefs();
    }

}

function populateStorage() {
    var checkedContrastOp = (typeof $('input[name="high-contrast"]:checked').val() === 'undefined') ? "no" : checkedContrastOp;
    localStorage.setItem('isHighContrast', checkedContrastOp);

    setPrefs();
}

function setPrefs() {
    var contrastPref = localStorage.getItem('isHighContrast');
    console.log(contrastPref)

    if (contrastPref === "yes") {
        $('input[name="high-contrast"][value="yes"]').attr('checked', 'checked');
        $('body').addClass('high-contrast');
    } else {
        $('input[name="high-contrast"][value="no"]').attr('checked', 'checked');
        $('body').removeClass('high-contrast');
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
});
