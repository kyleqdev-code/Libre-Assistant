/**
 * Environment Configuration
 * 
 * This file documents the environment variables required for the Libre Assistant.
 */

/**
 * HACK_CLUB_API_KEY
 * 
 * The API key for Hack Club API access.
 * This is used to authenticate requests to the Hack Club backend.
 * 
 * Usage:
 *   - Store in your .env.local or environment variables
 *   - Example: HACK_CLUB_API_KEY=your_api_key_here
 *   - Used by custom API key settings to bypass rate limits
 * 
 * @type {string}
 */
export const HACK_CLUB_API_KEY = process.env.HACK_CLUB_API_KEY;

export const ENV_CONFIG = {
  HACK_CLUB_API_KEY: {
    description: 'Hack Club API key for authentication',
    required: false,
    example: 'your_api_key_here',
  },
};

export default ENV_CONFIG;
