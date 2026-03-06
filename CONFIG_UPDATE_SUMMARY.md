# AI Assistant Configuration Update Summary

## Changes Made

### 1. Model Configuration (`availableModels.js`)
- ✓ Removed 'Perplexity Sonar Research' option entirely
- ✓ Set default model to 'GPT-5 Mini' (`openai/gpt-5-mini`)
- ✓ Added new 'Math Mode' option with:
  - Default model: DeepSeek V3.2 Speciale with temperature 0
  - Image handling: Switches to Gemini 3 Flash with high reasoning at temperature 1.0
  - Description: "Leverages state of the art models and superior configurations to outperform ChatGPT"

### 2. Settings Configuration (`settings.js`)
- ✓ Default theme mode set to 'light'
- ✓ Web search enabled by default (`search_enabled: true`)
- ✓ Hidden custom API key input via `show_custom_api_key: false`
- ✓ Added system prompt storage for general and math modes

### 3. Default Parameters (`defaultParameters.js`)
- ✓ Removed default value for `top_p` (now `null` instead of `0.95`)
- ✓ Field left blank to indicate unset state

### 4. System Prompts (`systemPrompts.js`)
- ✓ Created new file with two system prompts:
  - General mode: Helpful, reliable chatbot for information and reasoning
  - Math mode: Specialized math tutor with emphasis on correctness and teaching

### 5. Environment Configuration (`envConfig.js`)
- ✓ Created environment variable documentation
- ✓ Specified `HACK_CLUB_API_KEY` as the environment variable name for storing the Hack Club API key
- ✓ Documented usage and requirements

## Implementation Details

### Math Mode Activation
When a user selects Math Mode:
- Primary model: `deepseek/deepseek-v3.2-speciale` (temperature: 0)
- When images are uploaded: Automatically switches to `google/gemini-3-flash` (temperature: 1.0, high reasoning effort)
- Uses the specialized math system prompt for all interactions

### Environment Variable
Store the Hack Club API key in your environment as:
```
HACK_CLUB_API_KEY=your_api_key_here
```

This allows users to bypass rate limits when setting a custom API key in settings.

## Files Modified
1. `/app/composables/availableModels.js` - Models and math mode configuration
2. `/app/composables/settings.js` - Settings defaults and UI preferences
3. `/app/composables/defaultParameters.js` - Parameter defaults

## Files Created
1. `/app/composables/systemPrompts.js` - System prompts for both modes
2. `/app/composables/envConfig.js` - Environment configuration documentation
