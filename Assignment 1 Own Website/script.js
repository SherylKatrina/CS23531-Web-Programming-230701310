const weeklyCtx = document.getElementById('weeklyTrend').getContext('2d');
new Chart(weeklyCtx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            label: 'Weekly Attendance %',
            data: [93, 92, 91, 92.5, 92],
            borderColor: '#9c27b0',
            backgroundColor: 'rgba(156,39,176,0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                min: 85,
                max: 100
            }
        }
    }
});

const gradeCtx = document.getElementById('gradeChart').getContext('2d');
new Chart(gradeCtx, {
    type: 'bar',
    data: {
        labels: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
        datasets: [{
            label: 'Attendance % by Grade',
            data: [93.8, 89.3, 96.7, 92.3],
            backgroundColor: [
                '#ab47bc', '#ce93d8', '#ba68c8', '#d1c4e9'
            ]
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
