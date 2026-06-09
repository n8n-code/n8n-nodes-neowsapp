import type { INodeProperties } from 'n8n-workflow';

export const feedDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Feed"
					]
				}
			},
			"options": [
				{
					"name": "Retrieve Near Earth Object Feed",
					"value": "Retrieve Near Earth Object Feed",
					"action": "Find Near Earth Objects by date",
					"description": "Get a list of Near Earth Objects within a date range, The max range in one query is 7 days",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest/v1/feed"
						}
					}
				},
				{
					"name": "Retrieve NEO Feed Today",
					"value": "Retrieve NEO Feed Today",
					"action": "Find Near Earth Objects for today",
					"description": "Get a list of Near Earth Objects for today",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest/v1/feed/today"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /rest/v1/feed",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Feed"
					],
					"operation": [
						"Retrieve Near Earth Object Feed"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"description": "Start of date range search, format: yyyy-MM-dd - (ex: 2015-04-28)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Feed"
					],
					"operation": [
						"Retrieve Near Earth Object Feed"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"description": "End of date range search, format: yyyy-MM-dd - (ex: 2015-04-28). If left off search will extends 7 days from start_date",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Feed"
					],
					"operation": [
						"Retrieve Near Earth Object Feed"
					]
				}
			}
		},
		{
			"displayName": "Detailed",
			"name": "detailed",
			"description": "detailed",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "detailed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Feed"
					],
					"operation": [
						"Retrieve Near Earth Object Feed"
					]
				}
			}
		},
		{
			"displayName": "GET /rest/v1/feed/today",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Feed"
					],
					"operation": [
						"Retrieve NEO Feed Today"
					]
				}
			}
		},
		{
			"displayName": "Detailed",
			"name": "detailed",
			"description": "detailed",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "detailed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Feed"
					],
					"operation": [
						"Retrieve NEO Feed Today"
					]
				}
			}
		},
];
