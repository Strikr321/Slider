// Get the slider and value display elements
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

// Set the initial value display
sliderValue.textContent = slider.value;

// Update the value display when the slider changes
slider.addEventListener("input", function () {
  sliderValue.textContent = slider.value;
});
