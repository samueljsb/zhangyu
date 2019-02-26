function click_start () {
  var start_button = document.getElementById('start')
  var stop_button = document.getElementById('stop')
  var slider = document.getElementById('speed')
  start_button.disabled = true
  stop_button.disabled = false
  slider.disabled = true

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
  var delay = delays[speed.value / 10]
  window.instructor = setInterval(run_zhangyu, delay)
}

function click_stop () {
  var start_button = document.getElementById('start')
  var stop_button = document.getElementById('stop')
  var slider = document.getElementById('speed')
  start_button.disabled = false
  stop_button.disabled = true
  slider.disabled = false

  clearInterval(window.instructor)
  document.getElementById('instruction').innerHTML = '&nbsp'
}

function run_zhangyu () {
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
  var fname = 'assets/audio/' + name + '.mp3'
  var audio = new Audio(fname)
  audio.play()
}
