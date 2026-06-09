import type { INodeProperties } from 'n8n-workflow';

export const statsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					]
				}
			},
			"options": [
				{
					"name": "Retrieve Current Neo Statistics",
					"value": "Retrieve Current Neo Statistics",
					"action": "Get the Near Earth Object data set totals",
					"description": "retrieveCurrentNeoStatistics",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest/v1/stats"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /rest/v1/stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Stats"
					],
					"operation": [
						"Retrieve Current Neo Statistics"
					]
				}
			}
		},
];
