import type { INodeProperties } from 'n8n-workflow';

export const neosentryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Neosentry"
					]
				}
			},
			"options": [
				{
					"name": "Retrieve Sentry Risk Data",
					"value": "Retrieve Sentry Risk Data",
					"action": "Retrieve Sentry (Impact Risk ) Near Earth Objects",
					"description": "Retrieves Near Earth Objects listed in the NASA sentry data set",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest/v1/neo/sentry"
						}
					}
				},
				{
					"name": "Retrieve Sentry Risk Data By ID",
					"value": "Retrieve Sentry Risk Data By ID",
					"action": "Retrieve Sentry (Impact Risk ) Near Earth Objectby ID ",
					"description": "Retrieves Sentry Near Earth Object by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest/v1/neo/sentry/{{$parameter[\"asteroid_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /rest/v1/neo/sentry",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Neosentry"
					],
					"operation": [
						"Retrieve Sentry Risk Data"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"description": "show current list of Sentry objects, or show removed Sentry objects",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_active",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Neosentry"
					],
					"operation": [
						"Retrieve Sentry Risk Data"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "page",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Neosentry"
					],
					"operation": [
						"Retrieve Sentry Risk Data"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "size",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Neosentry"
					],
					"operation": [
						"Retrieve Sentry Risk Data"
					]
				}
			}
		},
		{
			"displayName": "GET /rest/v1/neo/sentry/{asteroid_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Neosentry"
					],
					"operation": [
						"Retrieve Sentry Risk Data By ID"
					]
				}
			}
		},
		{
			"displayName": "Asteroid ID",
			"name": "asteroid_id",
			"required": true,
			"description": "ID of NearEarth object.  ID can be SPK_ID, Asteroid des (designation) or Sentry ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Neosentry"
					],
					"operation": [
						"Retrieve Sentry Risk Data By ID"
					]
				}
			}
		},
];
