AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "category",
					"rotate": true,
					"color": "#FFF",
					"handDrawScatter": 1,
					"handDrawThickness": 0,
					"theme": "dark",
					"categoryAxis": {
						"gridPosition": "start"
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "[[title]] of [[category]]:[[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-1",
							"title": "One",
							"type": "column",
							"fillColors": "#05c77e",
							"valueField": "column-1"
						},
						{
							"balloonText": "[[title]] of [[category]]:[[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-2",
							"title": "Two",
							"type": "column",
							"valueField": "column-2"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": ""
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true
					},
					"dataProvider": [
						{
							"category": "neonatal condition",
							"column-1": "550000"
						},
						{
							"category": "Lower respiratory infections",
							"column-1": "420000"
						},
						{
							"category": "Ischaemic heart disease",
							"column-1": "230000"
						},
						{
							"category": "Stroke",
							"column-1": "225000"
						},
						{
							"category": "Diarrhoeal disease",
							"column-1": "235000"
						},
						{
							"category": "Malaria",
							"column-1": "195000"
						},
						{
							"category": "Road injury",
							"column-1": "195000"
						}
					]
				}
			);