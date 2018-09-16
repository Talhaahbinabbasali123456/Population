function onclickFunc() {

			let country = document.querySelector("#inpC").value;
			let year = document.querySelector("#inpY").value;
			let age = document.querySelector("#inpA").value;

			$.ajax({	
				url : `https://api.population.io:80/1.0/population/${year}/${country}/${age}/`,
				success: function(data){
					console.log(data)


					let female = data[0].females;
					let male = data[0].males;
					let total = data[0].total;
					var ctx = document.getElementById("myChart").getContext('2d');
					var myChart = new Chart(ctx, {
						type: 'bar',
						data: {
							labels: ["Male", "Femail", "Total"],
							datasets: [{
								label: `${country} of Votes`,
								data: [female, male, total],
								backgroundColor: [
								'rgba(255, 99, 132, 0.2)',
								'rgba(54, 162, 235, 0.2)',
								'rgba(255, 206, 86, 0.2)'

								],
								borderColor: [
								'rgba(255,99,132,1)',
								'rgba(54, 162, 235, 1)',
								'rgba(255, 206, 86, 1)'

								],
								borderWidth: 1
							}]
						},
						options: {
							scales: {
								yAxes: [{
									ticks: {
										beginAtZero:true
									}
								}]
							}
						}
					});
				}
			});
		}
