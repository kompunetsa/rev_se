/**
 * Interactive Cat Page - Main Entry Point
 * 
 * This module initializes and orchestrates all components of the Interactive Cat Page.
 * It sets up the cat character, interaction handlers, animation state machine, audio manager,
 * user preferences, responsive layout, accessibility features, and error handling.
 */

// ============================================================================
// Component Placeholder Classes (to be implemented in subsequent tasks)
// ============================================================================

/**
 * CatCharacter Component
 * Manages the visual representation and state of the cat character
 */
class CatCharacter {
    constructor(containerSelector) {
        this.containerSelector = containerSelector;
        this.element = document.querySelector(containerSelector);
        this.currentAnimation = null;
        this.visualState = 'default';
        this.currentWidth = null;
        this.currentHeight = null;
    }

    /**
     * Render the cat character in the center of the viewport
     * Ensures the cat is displayed and properly positioned
     */
    render() {
        if (!this.element) {
            console.error(`CatCharacter: Element not found for selector "${this.containerSelector}"`);
            return;
        }

        // Ensure element is visible and properly positioned
        this.element.style.display = 'block';
        this.element.style.margin = '0 auto';
        
        // Set initial size (20-40% of viewport width, default to 30%)
        this.setSize();
        
        console.log('CatCharacter rendered successfully');
    }

    /**
     * Set the size of the cat character
     * Scales the cat between 20-40% of viewport width
     * @param {number} percentOfViewport - Optional percentage of viewport width (20-40)
     */
    setSize(percentOfViewport = 30) {
        if (!this.element) {
            console.error('CatCharacter: Cannot set size - element not found');
            return;
        }

        // Clamp percentage to 20-40% range
        const clampedPercent = Math.max(20, Math.min(40, percentOfViewport));
        
        // Calculate size based on viewport width
        const viewportWidth = window.innerWidth;
        const catWidth = (clampedPercent / 100) * viewportWidth;
        
        // Apply size to element
        this.element.style.width = `${catWidth}px`;
        this.element.style.height = 'auto'; // Maintain aspect ratio
        this.element.style.maxWidth = '100%';
        
        // Store current dimensions
        this.currentWidth = catWidth;
        this.currentHeight = this.element.offsetHeight;
        
        console.log(`CatCharacter size set to ${clampedPercent}% of viewport (${catWidth}px)`);
    }

    /**
     * Get the DOM element reference for the cat character
     * @returns {HTMLElement} The cat character DOM element
     */
    getElement() {
        return this.element;
    }

    applyAnimation(animationType) {
        // Map animation type to CSS class name
        const animationClassMap = {
            jump: 'animate-jump',
            spin: 'animate-spin-cat',
            blink: 'animate-blink',
            tailWag: 'animate-tail-wag',
            headTilt: 'animate-head-tilt'
        };

        const animationClass = animationClassMap[animationType];
        if (!animationClass) {
            console.warn(`Unknown animation type: ${animationType}`);
            return;
        }

        // Add the animation class to the element
        if (this.element) {
            this.element.classList.add(animationClass);
            this.currentAnimation = animationType;
        }
    }

    removeAnimation() {
        // Remove all animation classes from the element
        if (this.element) {
            const animationClasses = [
                'animate-jump',
                'animate-spin-cat',
                'animate-blink',
                'animate-tail-wag',
                'animate-head-tilt'
            ];

            animationClasses.forEach(animClass => {
                this.element.classList.remove(animClass);
            });

            this.currentAnimation = null;
        }
    }

    setVisualState(state) {
        // Validate state
        const validStates = ['default', 'happy', 'playful'];
        if (!validStates.includes(state)) {
            console.warn(`Unknown visual state: ${state}. Valid states are: ${validStates.join(', ')}`);
            return;
        }

        if (!this.element) {
            return;
        }

        // Remove all state classes
        validStates.forEach(s => {
            this.element.classList.remove(`state-${s}`);
        });

        // Add the new state class
        this.element.classList.add(`state-${state}`);
        this.visualState = state;
    }

    setAriaLabel(label) {
        /**
         * Sets the ARIA label for the cat character element
         * This provides descriptive text for screen readers
         * 
         * @param {string} label - The descriptive label for the cat character
         */
        if (this.element) {
            this.element.setAttribute('aria-label', label);
        }
    }

    setTabIndex(index) {
        /**
         * Sets the tab index for the cat character element
         * This makes the cat focusable via keyboard navigation
         * 
         * @param {number} index - The tab index value (0 for focusable, -1 for not focusable)
         */
        if (this.element) {
            this.element.setAttribute('tabindex', index);
        }
    }

    setAltText(altText) {
        /**
         * Sets the alt text for the cat character image
         * This provides descriptive text for screen readers and when image fails to load
         * 
         * @param {string} altText - The descriptive alt text for the cat image
         */
        if (this.element) {
            this.element.setAttribute('alt', altText);
        }
    }
}

/**
 * InteractionHandler Component
 * Captures and processes user interactions (click, hover, touch, keyboard)
 */
class InteractionHandler {
    constructor(catElement, stateManager) {
        this.catElement = catElement;
        this.stateManager = stateManager;
        this.longPressDuration = 500;
        this.longPressTimer = null;
    }

    attachListeners() {
        // Placeholder: will be implemented in task 3.1
        console.log('InteractionHandler.attachListeners() - placeholder');
    }

    detachListeners() {
        // Placeholder: will be implemented in task 3.1
        console.log('InteractionHandler.detachListeners() - placeholder');
    }

    onMouseClick(event) {
        // Placeholder: will be implemented in task 3.2
        console.log('InteractionHandler.onMouseClick() - placeholder');
    }

    onMouseEnter(event) {
        // Placeholder: will be implemented in task 3.2
        console.log('InteractionHandler.onMouseEnter() - placeholder');
    }

    onMouseLeave(event) {
        // Placeholder: will be implemented in task 3.2
        console.log('InteractionHandler.onMouseLeave() - placeholder');
    }

    onTouchStart(event) {
        // Placeholder: will be implemented in task 3.3
        console.log('InteractionHandler.onTouchStart() - placeholder');
    }

    onTouchEnd(event) {
        // Placeholder: will be implemented in task 3.3
        console.log('InteractionHandler.onTouchEnd() - placeholder');
    }

    onLongPress(event) {
        // Placeholder: will be implemented in task 3.3
        console.log('InteractionHandler.onLongPress() - placeholder');
    }

    onKeyDown(event) {
        // Placeholder: will be implemented in task 3.3
        console.log('InteractionHandler.onKeyDown() - placeholder');
    }

    setLongPressDuration(ms) {
        this.longPressDuration = ms;
    }
}

/**
 * AnimationStateMachine Component
 * Manages animation state, queue, and execution
 */
class AnimationStateMachine {
    constructor() {
        this.currentAnimation = null;
        this.queue = [];
        this.isPlaying = false;
        this.animationTypes = ['jump', 'spin', 'blink', 'tailWag', 'headTilt'];
        this.animationDurations = {
            jump: 600,
            spin: 1000,
            blink: 400,
            tailWag: 500,
            headTilt: 500
        };
        this.lastAnimationType = null;
        this.startCallbacks = [];
        this.completeCallbacks = [];
    }

    queueAnimation(animationType) {
        // Placeholder: will be implemented in task 4.1
        console.log(`AnimationStateMachine.queueAnimation(${animationType}) - placeholder`);
    }

    executeAnimation(animationType) {
        // Placeholder: will be implemented in task 4.1
        console.log(`AnimationStateMachine.executeAnimation(${animationType}) - placeholder`);
    }

    getCurrentAnimation() {
        return this.currentAnimation;
    }

    isAnimating() {
        return this.isPlaying;
    }

    getAvailableAnimations() {
        return this.animationTypes;
    }

    getRandomAnimation() {
        // Placeholder: will be implemented in task 4.2
        console.log('AnimationStateMachine.getRandomAnimation() - placeholder');
    }

    getAnimationDuration(type) {
        return this.animationDurations[type] || 500;
    }

    reset() {
        // Placeholder: will be implemented in task 4.3
        console.log('AnimationStateMachine.reset() - placeholder');
    }

    onAnimationStart(callback) {
        this.startCallbacks.push(callback);
    }

    onAnimationComplete(callback) {
        this.completeCallbacks.push(callback);
    }
}

/**
 * AudioManager Component
 * Manages audio playback with queuing and user preferences
 */
class AudioManager {
    constructor() {
        this.isMuted = false;
        this.currentSound = null;
        this.soundQueue = [];
        this.soundDurations = {
            jump: 500,
            spin: 800,
            blink: 300,
            tailWag: 400,
            headTilt: 400
        };
        this.soundCompleteCallbacks = [];
    }

    play(soundType) {
        // Placeholder: will be implemented in task 6.1
        console.log(`AudioManager.play(${soundType}) - placeholder`);
    }

    stop() {
        // Placeholder: will be implemented in task 6.1
        console.log('AudioManager.stop() - placeholder');
    }

    queue(soundType) {
        // Placeholder: will be implemented in task 6.1
        console.log(`AudioManager.queue(${soundType}) - placeholder`);
    }

    setMuted(isMuted) {
        this.isMuted = isMuted;
    }

    isMuted() {
        return this.isMuted;
    }

    respectBrowserAudioPreference() {
        // Placeholder: will be implemented in task 6.2
        console.log('AudioManager.respectBrowserAudioPreference() - placeholder');
    }

    setSoundDuration(soundType, ms) {
        this.soundDurations[soundType] = ms;
    }

    loadSounds(soundMap) {
        // Placeholder: will be implemented in task 6.2
        console.log('AudioManager.loadSounds() - placeholder');
    }

    onSoundComplete(callback) {
        this.soundCompleteCallbacks.push(callback);
    }
}

/**
 * UserPreferencesManager Component
 * Manages and persists user preferences
 */
class UserPreferencesManager {
    constructor() {
        this.preferences = {
            isMuted: false,
            prefersReducedMotion: false
        };
        this.changeCallbacks = [];
        this.load();
    }

    setMuted(isMuted) {
        this.preferences.isMuted = isMuted;
        this.notifyChangeCallbacks();
        this.save();
    }

    isMuted() {
        return this.preferences.isMuted;
    }

    prefersReducedMotion() {
        // Placeholder: will be implemented in task 7.2
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    save() {
        // Placeholder: will be implemented in task 7.1
        console.log('UserPreferencesManager.save() - placeholder');
    }

    load() {
        // Placeholder: will be implemented in task 7.1
        console.log('UserPreferencesManager.load() - placeholder');
    }

    onPreferenceChange(callback) {
        this.changeCallbacks.push(callback);
    }

    notifyChangeCallbacks() {
        this.changeCallbacks.forEach(callback => callback(this.preferences));
    }
}

/**
 * ResponsiveLayoutManager Component
 * Manages responsive design and viewport adaptation
 */
class ResponsiveLayoutManager {
    constructor(catCharacter) {
        this.catCharacter = catCharacter;
        this.currentBreakpoint = 'desktop';
        this.viewportChangeCallbacks = [];
    }

    updateLayout() {
        // Placeholder: will be implemented in task 9.1
        console.log('ResponsiveLayoutManager.updateLayout() - placeholder');
    }

    getCatSize() {
        // Placeholder: will be implemented in task 9.1
        console.log('ResponsiveLayoutManager.getCatSize() - placeholder');
    }

    getViewportSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    getBreakpoint() {
        return this.currentBreakpoint;
    }

    onViewportChange(callback) {
        this.viewportChangeCallbacks.push(callback);
    }
}

/**
 * AccessibilityManager Component
 * Ensures accessibility compliance and features
 */
class AccessibilityManager {
    constructor(catElement, interactionHandler) {
        this.catElement = catElement;
        this.interactionHandler = interactionHandler;
    }

    setupKeyboardNavigation() {
        // Placeholder: will be implemented in task 10.1
        console.log('AccessibilityManager.setupKeyboardNavigation() - placeholder');
    }

    setupScreenReaderSupport() {
        // Placeholder: will be implemented in task 10.1
        console.log('AccessibilityManager.setupScreenReaderSupport() - placeholder');
    }

    setupSkipLink() {
        // Placeholder: will be implemented in task 10.1
        console.log('AccessibilityManager.setupSkipLink() - placeholder');
    }

    validateContrast() {
        // Placeholder: will be implemented in task 10.2
        console.log('AccessibilityManager.validateContrast() - placeholder');
    }

    validateTouchTargetSize() {
        // Placeholder: will be implemented in task 10.2
        console.log('AccessibilityManager.validateTouchTargetSize() - placeholder');
    }
}

/**
 * ErrorHandler Component
 * Handles errors gracefully and provides user feedback
 */
class ErrorHandler {
    constructor() {
        this.errorCallbacks = [];
    }

    handleImageLoadError(error) {
        // Placeholder: will be implemented in task 11.1
        console.error('ErrorHandler.handleImageLoadError():', error);
    }

    handleAudioLoadError(error) {
        // Placeholder: will be implemented in task 11.1
        console.error('ErrorHandler.handleAudioLoadError():', error);
    }

    handleBrowserCompatibilityError() {
        // Placeholder: will be implemented in task 11.1
        console.error('ErrorHandler.handleBrowserCompatibilityError()');
    }

    displayErrorMessage(message) {
        // Placeholder: will be implemented in task 11.2
        console.error('Error:', message);
    }

    logError(error) {
        console.error('Logged error:', error);
    }

    showFallback() {
        // Placeholder: will be implemented in task 11.2
        console.log('ErrorHandler.showFallback() - placeholder');
    }

    onError(callback) {
        this.errorCallbacks.push(callback);
    }
}

// ============================================================================
// Application Initialization
// ============================================================================

/**
 * Initialize the Interactive Cat Page application
 */
function initializeApp() {
    console.log('Initializing Interactive Cat Page...');

    // Initialize components
    const catCharacter = new CatCharacter('#cat-character');
    const animationStateMachine = new AnimationStateMachine();
    const interactionHandler = new InteractionHandler(catCharacter.getElement(), animationStateMachine);
    const audioManager = new AudioManager();
    const userPreferencesManager = new UserPreferencesManager();
    const responsiveLayoutManager = new ResponsiveLayoutManager(catCharacter);
    const accessibilityManager = new AccessibilityManager(catCharacter.getElement(), interactionHandler);
    const errorHandler = new ErrorHandler();

    // Store components in window for debugging
    window.appComponents = {
        catCharacter,
        animationStateMachine,
        interactionHandler,
        audioManager,
        userPreferencesManager,
        responsiveLayoutManager,
        accessibilityManager,
        errorHandler
    };

    console.log('Interactive Cat Page initialized successfully');
    console.log('Components available at window.appComponents');
}

// ============================================================================
// Page Load Handler
// ============================================================================

/**
 * Initialize the application when the DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// ============================================================================
// Module Exports (for testing and external use)
// ============================================================================

export {
    CatCharacter,
    InteractionHandler,
    AnimationStateMachine,
    AudioManager,
    UserPreferencesManager,
    ResponsiveLayoutManager,
    AccessibilityManager,
    ErrorHandler
};
