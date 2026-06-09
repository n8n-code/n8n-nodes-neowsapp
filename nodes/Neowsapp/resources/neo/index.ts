import type { INodeProperties } from 'n8n-workflow';

export const neoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Neo"
					]
				}
			},
			"options": [
				{
					"name": "Browse Near Earth Objects",
					"value": "Browse Near Earth Objects",
					"action": "Browse the Near Earth Objects service",
					"description": "Retieve a paginated list of Near Earth Objects",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest/v1/neo/browse"
						}
					}
				},
				{
					"name": "Retrieve Near Earth Object By Id",
					"value": "Retrieve Near Earth Object By Id",
					"action": "Find Near Earth Objects by id",
					"description": "Retrieve a Near Earth Objects with a given id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rest/v1/neo/{{$parameter[\"asteroid_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /rest/v1/neo/browse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Neo"
					],
					"operation": [
						"Browse Near Earth Objects"
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
						"Neo"
					],
					"operation": [
						"Browse Near Earth Objects"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "size",
			"default": 20,
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
						"Neo"
					],
					"operation": [
						"Browse Near Earth Objects"
					]
				}
			}
		},
		{
			"displayName": "GET /rest/v1/neo/{asteroid_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Neo"
					],
					"operation": [
						"Retrieve Near Earth Object By Id"
					]
				}
			}
		},
		{
			"displayName": "Asteroid Id",
			"name": "asteroid_id",
			"required": true,
			"description": "ID of Near Earth Object - (ex: 3729835)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Neo"
					],
					"operation": [
						"Retrieve Near Earth Object By Id"
					]
				}
			}
		},
];
