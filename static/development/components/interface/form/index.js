import './index.scss'
import './elements/all_elements'
import './form_grid.scss'

 




$('.hidden_value_file').on('change', function() {
    let text = '';
    let file_create = $('#input_user_file')[0];

    $.each(file_create.files, function(index, value) {
        text += `${value.name} `;
    });
    $('.user_file_name').text(text);
});
