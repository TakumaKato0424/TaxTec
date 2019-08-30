var buildHTML = function() {
    var html = `<div class="quiz" id="quiz">
                  <div class="quiz__text">
                    <p>
                      ここに説明が入ります
                    </p>
                  <div class="quiz__yes-no clearfix">
                    <div class="yes" id="yes-button" data-id="1">
                      <i class="fas fa-thumbs-up yes__icon"></i>
                      <p>YES</p>
                    </div>
                    <div class="no" id="no-button" data-id="0">
                      <i class="fas fa-thumbs-down no__icon"></i>
                      <p>NO</p>
                    </div>
                  </div>
                  <div class="quiz__explanation">
                    <p class="message__text">message-test</p>
                  </div>
                </div>`;
    return html;
}

$(document).on('turbolinks:load', function() {
    var start_button = document.getElementById('start-button');
    if (start_button) {
        start_button.addEventListener('click', function() {
            // Todo messageクラスを変える
            if (document.getElementById('quiz')) {
                $('#quiz').remove();
            }
            var html = buildHTML;
            console.log(html);
            $('#quiz-content').append(html);
        }, false);
    }
});