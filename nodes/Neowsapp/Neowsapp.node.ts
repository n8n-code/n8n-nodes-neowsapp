import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { feedDescription } from './resources/feed';
import { neoDescription } from './resources/neo';
import { neosentryDescription } from './resources/neosentry';
import { statsDescription } from './resources/stats';

export class Neowsapp implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'neowsapp',
		name: 'N8nDevNeowsapp',
		icon: { light: 'file:./neowsapp.svg', dark: 'file:./neowsapp.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Web service for near earth objects. All the data is from the NASA JPL Asteroid team',
		defaults: { name: 'neowsapp' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNeowsappApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Feed",
					"value": "Feed",
					"description": "Operations with NearEarthObjects"
				},
				{
					"name": "Neo",
					"value": "Neo",
					"description": "Operations with NearEarthObjects"
				},
				{
					"name": "Neosentry",
					"value": "Neosentry",
					"description": "Operations with Sentry NearEarthObjects"
				},
				{
					"name": "Stats",
					"value": "Stats",
					"description": "Stats on Near Earth Object data sets"
				}
			],
			"default": ""
		},
		...feedDescription,
		...neoDescription,
		...neosentryDescription,
		...statsDescription
		],
	};
}
