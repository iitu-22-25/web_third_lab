function show_hide_password(target) {
    let input = document.getElementById('password-input');
    if (input.getAttribute('type') === 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}

function change_dark_light_mode() {
    document.body.classList.toggle('dark_body')
    let form_description = document.querySelector(".form_description")
    form_description.classList.toggle("dark_form_description")

    let form_switch = document.querySelector(".form_switch")
    form_switch.classList.toggle("dark_form_switch")

    let active = document.querySelector(".active")
    active.classList.toggle("dark_active")

    let form_submit_button = document.querySelector(".form_submit_button")
    form_submit_button.classList.toggle("dark_form_submit_button")

    let change_dark_light_mode = document.querySelector(".change_dark_light_mode")
    change_dark_light_mode.classList.toggle("dark_change_dark_light_mode")

    let form_input = document.querySelector(".form_input")
    form_input.classList.toggle("dark_form_input")

    let form_input2 = document.querySelector(".form_input2")
    form_input2.classList.toggle("dark_form_input")

    let image_title = document.querySelector(".image_title")
    image_title.classList.toggle("dark_image_title")

    let image_description = document.querySelector(".image_description")
    image_description.classList.toggle("dark_image_description")
}