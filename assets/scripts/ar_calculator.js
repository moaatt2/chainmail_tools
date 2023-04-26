// Get all elements of interest
const inner_diameter = document.getElementById('inner_diameter');
const wire_diameter  = document.getElementById('wire_diameter');
const aspect_ratio   = document.getElementById('aspect_ratio');


// Add calculation triggers
//// click something else
inner_diameter.addEventListener('blur', calculate);
wire_diameter.addEventListener('blur', calculate);
aspect_ratio.addEventListener('blur', calculate);

//// Press Enter
inner_diameter.addEventListener('keypress', handleEnter);
wire_diameter.addEventListener('keypress', handleEnter);
aspect_ratio.addEventListener('keypress', handleEnter);


// Create function to calculate missing value
function calculate() {
    let id = parseFloat(inner_diameter.value)
    let wd = parseFloat(wire_diameter.value)
    let ar = parseFloat(aspect_ratio.value)

    if (!isNaN(id) && !isNaN(wd)) {
        // Calculate AR with id and wd
        aspect_ratio.value = id / wd;
    } else if (!isNaN(id) && !isNaN(ar)) {
        // Calculate WD with id and ar
        wire_diameter.value = id / ar;
    } else if (!isNaN(wd) && !isNaN(ar)) {
        inner_diameter.value = ar * wd;
    }
}

// Handle 'Enter' key press
function handleEnter(event) {
    if (event.keyCode === 13) {
        calculate();
    }
}