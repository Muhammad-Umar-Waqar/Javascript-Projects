// JavaScript code here
const clock = document.getElementById('clock');
const setAlarmButton = document.getElementById('setAlarmButton');
const AlarmBox = document.getElementById('AlarmBox');
const closeCard = document.getElementById('closeCard');
const AlarmForm = document.getElementById('AlarmForm');
const Alarm_Input = document.getElementById('Alarm_Input');
const alarmSound = document.getElementById('alarmSound');
const alarm_result = document.getElementById('alarm_result');
const Cancel_Alarm_Btn = document.getElementById('Cancel_Alarm_Btn');
const cancelAlarmButton = document.getElementById('cancelAlarm');

let isAlarmPlaying = false; // Flag to track if the alarm is playing
let alarmInterval;

// Function to update the clock
function updateClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    clock.innerHTML = `${h}:${m}:${s}`;
}

// Function to check the alarm and play sound if matched
function checkAlarm() {
    const alarmTime = Alarm_Input.value;
    const currentTime = clock.textContent;
    if (alarmTime === currentTime && !isAlarmPlaying) {
        isAlarmPlaying = true;
        alarmSound.loop = true; // Set the audio to loop
        alarmSound.play();
        showNotification(`Alarm set for: ${alarmTime}`);
    }
}

// Function to display a notification
function showNotification(message) {
    const notificationBox = document.getElementById('notificationBox');
    const notificationText = document.getElementById('notificationText');
    notificationText.textContent = message;
    notificationBox.style.display = 'block';
}

// Function to hide the notification
function hideNotification() {
    const notificationBox = document.getElementById('notificationBox');
    notificationBox.style.display = 'none';
}

// Update the clock every second
setInterval(updateClock, 1000);

// Check the alarm every second
setInterval(checkAlarm, 1000);

// Show and hide the birthdate box
setAlarmButton.addEventListener('click', function () {
    AlarmBox.style.display = 'block';
    AlarmForm.reset(); // Reset the form when opening the tab
    isAlarmPlaying = false; // Reset the alarm flag
    alarmSound.pause(); // Pause the alarm sound if it's playing
    hideNotification(); // Hide any open notification
});

closeCard.addEventListener('click', function () {
    AlarmBox.style.display = 'none';
    isAlarmPlaying = false; // Reset the alarm flag when closing the tab
    alarmSound.pause(); // Pause the alarm sound if it's playing
    hideNotification(); // Hide any open notification
});

Cancel_Alarm_Btn.addEventListener('click', function () {
    AlarmBox.style.display = 'none';
    isAlarmPlaying = false; // Reset the alarm flag when closing the tab
    alarmSound.pause(); // Pause the alarm sound if it's playing
    hideNotification(); // Hide any open notification
});


// Handle the birthdate form submission
AlarmForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const alarmTime = Alarm_Input.value;
    alarm_result.textContent = `Alarm set for: ${alarmTime}`;
    AlarmBox.style.display = 'none';
    isAlarmPlaying = false; // Reset the alarm flag
    alarmSound.pause(); // Pause the alarm sound if it's playing
    hideNotification(); // Hide any open notification

    // Set the alarm interval to check if it's time to play the sound
    alarmInterval = setInterval(checkAlarm, 1000);
});

// Function to cancel the alarm
function cancelAlarm() {
    clearInterval(alarmInterval); // Clear the alarm interval
    alarm_result.textContent = ''; // Clear the result text
    hideNotification(); // Hide any open notification
    isAlarmPlaying = false; // Reset the alarm flag
    alarmSound.pause(); // Pause the alarm sound if it's playing
}

// Handle the cancel alarm button click
cancelAlarmButton.addEventListener('click', cancelAlarm);


