const ctx = document.getElementById('trafficChart').getContext('2d');

const trafficData = {
    labels: ['Social Media', 'Search Engines', 'Email Marketing', 'Referrals', 'Direct'],
    datasets: [{
        label: 'Website Traffic Sources',
        data: [30, 40, 15, 10, 5],
        backgroundColor: [
            '#4BC0C0',  // Social Media
            '#FF6384',  // Search Engines
            '#FFCD56',  // Email Marketing
            '#36A2EB',  // Referrals
            '#9966FF'   // Direct
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'pie',
    data: trafficData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Website Traffic Sources'
            }
        }
    },
};

const trafficChart = new Chart(ctx, config);
