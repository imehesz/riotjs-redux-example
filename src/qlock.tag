import { createStore } from 'redux'
import qlock from './qlock_reducer.js';

<qlock>

  <div class="grid-container { 'dark': isDarkModeOn }">
      <div class="on">I</div>
	  <div class="on">T</div>
	  <div>L</div>
	  <div class="on">I</div>
	  <div class="on">S</div>
	  <div>B</div>
	  <div>F</div>
	  <div>A</div>
	  <div>M</div>
	  <div>P</div>
	  <div>M</div>

      <div class={ on: time.quarter }>A</div>
	  <div>C</div>
	  <div class={ on: time.quarter }>Q</div>
	  <div class={ on: time.quarter }>U</div>
	  <div class={ on: time.quarter }>A</div>
	  <div class={ on: time.quarter }>R</div>
	  <div class={ on: time.quarter }>T</div>
	  <div class={ on: time.quarter }>E</div>
	  <div class={ on: time.quarter }>R</div>
	  <div>D</div>
	  <div>C</div>

      <div class={ on: time.twentyMinutes }>T</div>
	  <div class={ on: time.twentyMinutes }>W</div>
	  <div class={ on: time.twentyMinutes }>E</div>
	  <div class={ on: time.twentyMinutes }>N</div>
	  <div class={ on: time.twentyMinutes }>T</div>
	  <div class={ on: time.twentyMinutes }>Y</div>
	  <div class={ on: time.fiveMinutes }>F</div>
	  <div class={ on: time.fiveMinutes }>I</div>
	  <div class={ on: time.fiveMinutes }>V</div>
	  <div class={ on: time.fiveMinutes }>E</div>
	  <div>X</div>

      <div class={ on: time.half }>H</div>
	  <div class={ on: time.half }>A</div>
	  <div class={ on: time.half }>L</div>
	  <div class={ on: time.half }>F</div>
	  <div>B</div>
	  <div class={ on: time.tenMinutes }>T</div>
	  <div class={ on: time.tenMinutes }>E</div>
	  <div class={ on: time.tenMinutes }>N</div>
	  <div>F</div>
	  <div class={ on: time.to }>T</div>
	  <div class={ on: time.to }>O</div>

      <div class={ on: time.past }>P</div>
	  <div class={ on: time.past }>A</div>
	  <div class={ on: time.past }>S</div>
	  <div class={ on: time.past }>T</div>
	  <div>E</div>
	  <div>R</div>
	  <div>U</div>
	  <div class={ on: time.h == 9 }>N</div>
	  <div class={ on: time.h == 9 }>I</div>
	  <div class={ on: time.h == 9 }>N</div>
	  <div class={ on: time.h == 9 }>E</div>

      <div class={ on: time.h == 1 }>O</div>
	  <div class={ on: time.h == 1 }>N</div>
	  <div class={ on: time.h == 1 }>E</div>
	  <div class={ on: time.h == 6 }>S</div>
	  <div class={ on: time.h == 6 }>I</div>
	  <div class={ on: time.h == 6 }>X</div>
	  <div class={ on: time.h == 3 }>T</div>
	  <div class={ on: time.h == 3 }>H</div>
	  <div class={ on: time.h == 3 }>R</div>
	  <div class={ on: time.h == 3 }>E</div>
	  <div class={ on: time.h == 3 }>E</div>

      <div class={ on: time.h == 4 }>F</div>
	  <div class={ on: time.h == 4 }>O</div>
	  <div class={ on: time.h == 4 }>U</div>
	  <div class={ on: time.h == 4 }>R</div>
	  <div class={ on: time.h == 5 }>F</div>
	  <div class={ on: time.h == 5 }>I</div>
	  <div class={ on: time.h == 5 }>V</div>
	  <div class={ on: time.h == 5 }>E</div>
	  <div class={ on: time.h == 2 }>T</div>
	  <div class={ on: time.h == 2 }>W</div>
	  <div class={ on: time.h == 2 }>O</div>

      <div class={ on: time.h == 8 }>E</div>
	  <div class={ on: time.h == 8 }>I</div>
	  <div class={ on: time.h == 8 }>G</div>
	  <div class={ on: time.h == 8 }>H</div>
	  <div class={ on: time.h == 8 }>T</div>
	  <div class={ on: time.h == 11 }>E</div>
	  <div class={ on: time.h == 11 }>L</div>
	  <div class={ on: time.h == 11 }>E</div>
	  <div class={ on: time.h == 11 }>V</div>
	  <div class={ on: time.h == 11 }>E</div>
	  <div class={ on: time.h == 11 }>N</div>

      <div class={ on: time.h == 7 }>S</div>
	  <div class={ on: time.h == 7 }>E</div>
	  <div class={ on: time.h == 7 }>V</div>
	  <div class={ on: time.h == 7 }>E</div>
	  <div class={ on: time.h == 7 }>N</div>
	  <div class={ on: time.h == 0 }>T</div>
	  <div class={ on: time.h == 0 }>W</div>
	  <div class={ on: time.h == 0 }>E</div>
	  <div class={ on: time.h == 0 }>L</div>
	  <div class={ on: time.h == 0 }>V</div>
	  <div class={ on: time.h == 0 }>E</div>

      <div class={ on: time.h == 10 }>T</div>
	  <div class={ on: time.h == 10 }>E</div>
	  <div class={ on: time.h == 10 }>N</div>
	  <div>S</div>
	  <div>E</div>
	  <div class={ on: time.oclock }>O</div>
	  <div class={ on: time.oclock }>C</div>
	  <div class={ on: time.oclock }>L</div>
	  <div class={ on: time.oclock }>O</div>
	  <div class={ on: time.oclock }>C</div>
	  <div class={ on: time.oclock }>K</div>
  </div>

<style>
	.grid-container {
		display: grid;
		justify-items: center;
		align-items: center;
		font-size: 3vw;

		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		height: 100%;
	}

	.grid-container.dark {
		background-color: black;
	}

	.grid-container.dark div {
		color: #333;
	}

	.grid-container.dark div.on {
		color: white;
	}

	div {
		color: lightgray; 
	}

	div.on {
		font-weight: bold;
		color: #333;
	}
</style>

<script>
	let tag = this
	tag.isDarkModeOn = false

	const store = createStore(qlock)

	let init = () => {
		setInterval(() => {
			store.dispatch({ type: 'TICK', now: new Date() })
		}, 3000)

		store.subscribe(render)

		tag.isDarkModeOn = getUrlVars()["mode"] && getUrlVars()["mode"].indexOf("dark") > -1 ? true : false
	}

	const render = () => {
		this.time = store.getState()
		this.update()
	}

	const getUrlVars = () => {
    	let vars = {}
    	let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m,key,value) => {
        	vars[key] = value
    	});

    	return vars
	}

	init()
</script>

</qlock>
