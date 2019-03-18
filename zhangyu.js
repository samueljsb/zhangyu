const all_moves = [
  'shift',
  'switch',
  'forwards',
  'backwards',
  'inside',
  'outside',
  'turn-in',
  'turn-out'
]

const delays = [
  3000,
  2500,
  2000,
  1500,
  1000,
  850,
  700,
  600,
  580,
  560,
  500,
  450,
  400
]

function click_start () {
  var start_button = document.getElementById('start')
  var stop_button = document.getElementById('stop')
  var slider = document.getElementById('speed')
  var warning = document.getElementById('slider-warning')
  start_button.disabled = true
  stop_button.disabled = false
  slider.disabled = true
  warning.style.visibility = 'visible'

  // Initialise all of the audio files
  document.getElementById('en-garde-audio').play()
  document.getElementById('en-garde-audio').pause()
  for (idx in all_moves) {
    var audio_id = all_moves[idx] + '-audio'
    document.getElementById(audio_id).play()
    document.getElementById(audio_id).pause()
  }

  var delay = delays[speed.value]
  document.getElementById('instruction').innerHTML = 'en-garde'
  call_move('en-garde')
  window.instructor = setInterval(run_zhangyu, delay)
}

function click_stop () {
  var start_button = document.getElementById('start')
  var stop_button = document.getElementById('stop')
  var slider = document.getElementById('speed')
  var warning = document.getElementById('slider-warning')
  start_button.disabled = false
  stop_button.disabled = true
  slider.disabled = false
  warning.style.visibility = 'hidden'

  clearInterval(window.instructor)
  document.getElementById('instruction').innerHTML = '&nbsp'
}

function run_zhangyu () {
  var moves = []
  var idx
  for (idx in all_moves) {
    var move = all_moves[idx]
    if (document.getElementById(move).checked) {
      moves.push(move)
    }
  }

  var selected_move = moves[(Math.random() * moves.length) | 0]
  document.getElementById('instruction').innerHTML = selected_move
  call_move(selected_move)
}

function call_move (name) {
  var audio_id = name + '-audio'
  document.getElementById(audio_id).play()
}
