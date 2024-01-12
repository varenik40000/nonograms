function render() {
    let body = document.body;
    return body.innerHTML = `
    <div class="main">
    <div class="pic">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
        <div class="line4"></div>
    </div>
    <div class="right">
        <div class="questions"></div>
        <div class="answer"></div>
        <div class="keyboard">
            <div class="wrapper">
            <div class="key" data-str="KeyQ">q</div>
            <div class="key" data-str="KeyW">w</div>
            <div class="key" data-str="KeyE">e</div>
            <div class="key" data-str="KeyR">r</div>
            <div class="key" data-str="KeyT">t</div>
            <div class="key" data-str="KeyY">y</div>
            <div class="key" data-str="KeyU">u</div>
            <div class="key" data-str="KeyI">i</div>
            <div class="key" data-str="KeyO">o</div>
            <div class="key" data-str="KeyP">p</div>
            <div class="key" data-str="KeyA">a</div>
            <div class="key" data-str="KeyS">s</div>
            <div class="key" data-str="KeyD">d</div>
            <div class="key" data-str="KeyF">f</div>
            <div class="key" data-str="KeyG">g</div>
            <div class="key" data-str="KeyH">h</div>
            <div class="key" data-str="KeyJ">j</div>
            <div class="key" data-str="KeyK">k</div>
            <div class="key" data-str="KeyL">l</div>
             <div class="key" data-str="KeyZ">z</div>
            <div class="key" data-str="KeyX">x</div>
            <div class="key" data-str="KeyC">c</div>
            <div class="key" data-str="KeyV">v</div>
            <div class="key" data-str="KeyB">b</div>
            <div class="key" data-str="KeyN">n</div>
            <div class="key" data-str="KeyM">m</div>
            </div>
        </div>
    </div>
    
  `}
  render()