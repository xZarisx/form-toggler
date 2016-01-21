export default function (form) {
    var formElements = [].slice.call(form.elements);

    form.classList.toggle('disabled');

    var disabledBool = form.classList.contains('disabled');
    formElements.map(function (elem) {
            elem.disabled = disabledBool;
    });
}
