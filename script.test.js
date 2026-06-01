/**
 * Unit Tests for CatCharacter Component - Task 2.2
 * Tests for applyAnimation(), removeAnimation(), and setVisualState() methods
 */

// Mock DOM setup for testing
function setupDOM() {
    document.body.innerHTML = `
        <div id="cat-character" class="cat-character"></div>
    `;
}

// Test Suite: applyAnimation()
describe('CatCharacter.applyAnimation()', () => {
    let catCharacter;

    beforeEach(() => {
        setupDOM();
        catCharacter = new CatCharacter('#cat-character');
    });

    test('should add jump animation class', () => {
        catCharacter.applyAnimation('jump');
        expect(catCharacter.element.classList.contains('animate-jump')).toBe(true);
        expect(catCharacter.currentAnimation).toBe('jump');
    });

    test('should add spin animation class', () => {
        catCharacter.applyAnimation('spin');
        expect(catCharacter.element.classList.contains('animate-spin-cat')).toBe(true);
        expect(catCharacter.currentAnimation).toBe('spin');
    });

    test('should add blink animation class', () => {
        catCharacter.applyAnimation('blink');
        expect(catCharacter.element.classList.contains('animate-blink')).toBe(true);
        expect(catCharacter.currentAnimation).toBe('blink');
    });

    test('should add tailWag animation class', () => {
        catCharacter.applyAnimation('tailWag');
        expect(catCharacter.element.classList.contains('animate-tail-wag')).toBe(true);
        expect(catCharacter.currentAnimation).toBe('tailWag');
    });

    test('should add headTilt animation class', () => {
        catCharacter.applyAnimation('headTilt');
        expect(catCharacter.element.classList.contains('animate-head-tilt')).toBe(true);
        expect(catCharacter.currentAnimation).toBe('headTilt');
    });

    test('should warn on unknown animation type', () => {
        const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
        catCharacter.applyAnimation('unknownAnimation');
        expect(consoleSpy).toHaveBeenCalledWith('Unknown animation type: unknownAnimation');
        expect(catCharacter.currentAnimation).toBeNull();
        consoleSpy.mockRestore();
    });

    test('should handle null element gracefully', () => {
        catCharacter.element = null;
        expect(() => catCharacter.applyAnimation('jump')).not.toThrow();
    });
});

// Test Suite: removeAnimation()
describe('CatCharacter.removeAnimation()', () => {
    let catCharacter;

    beforeEach(() => {
        setupDOM();
        catCharacter = new CatCharacter('#cat-character');
    });

    test('should remove jump animation class', () => {
        catCharacter.applyAnimation('jump');
        expect(catCharacter.element.classList.contains('animate-jump')).toBe(true);
        
        catCharacter.removeAnimation();
        expect(catCharacter.element.classList.contains('animate-jump')).toBe(false);
        expect(catCharacter.currentAnimation).toBeNull();
    });

    test('should remove all animation classes', () => {
        const animationClasses = ['animate-jump', 'animate-spin-cat', 'animate-blink', 'animate-tail-wag', 'animate-head-tilt'];
        
        // Add all animation classes
        animationClasses.forEach(cls => catCharacter.element.classList.add(cls));
        
        // Remove all animations
        catCharacter.removeAnimation();
        
        // Verify all are removed
        animationClasses.forEach(cls => {
            expect(catCharacter.element.classList.contains(cls)).toBe(false);
        });
        expect(catCharacter.currentAnimation).toBeNull();
    });

    test('should handle null element gracefully', () => {
        catCharacter.element = null;
        expect(() => catCharacter.removeAnimation()).not.toThrow();
    });

    test('should reset currentAnimation to null', () => {
        catCharacter.applyAnimation('spin');
        expect(catCharacter.currentAnimation).toBe('spin');
        
        catCharacter.removeAnimation();
        expect(catCharacter.currentAnimation).toBeNull();
    });
});

// Test Suite: setVisualState()
describe('CatCharacter.setVisualState()', () => {
    let catCharacter;

    beforeEach(() => {
        setupDOM();
        catCharacter = new CatCharacter('#cat-character');
    });

    test('should set default visual state', () => {
        catCharacter.setVisualState('default');
        expect(catCharacter.element.classList.contains('state-default')).toBe(true);
        expect(catCharacter.visualState).toBe('default');
    });

    test('should set happy visual state', () => {
        catCharacter.setVisualState('happy');
        expect(catCharacter.element.classList.contains('state-happy')).toBe(true);
        expect(catCharacter.visualState).toBe('happy');
    });

    test('should set playful visual state', () => {
        catCharacter.setVisualState('playful');
        expect(catCharacter.element.classList.contains('state-playful')).toBe(true);
        expect(catCharacter.visualState).toBe('playful');
    });

    test('should remove previous state class when switching states', () => {
        catCharacter.setVisualState('default');
        expect(catCharacter.element.classList.contains('state-default')).toBe(true);
        
        catCharacter.setVisualState('happy');
        expect(catCharacter.element.classList.contains('state-default')).toBe(false);
        expect(catCharacter.element.classList.contains('state-happy')).toBe(true);
    });

    test('should warn on invalid visual state', () => {
        const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
        catCharacter.setVisualState('invalid');
        expect(consoleSpy).toHaveBeenCalledWith(
            'Unknown visual state: invalid. Valid states are: default, happy, playful'
        );
        consoleSpy.mockRestore();
    });

    test('should handle null element gracefully', () => {
        catCharacter.element = null;
        expect(() => catCharacter.setVisualState('happy')).not.toThrow();
    });

    test('should transition between all states correctly', () => {
        const states = ['default', 'happy', 'playful'];
        
        states.forEach(state => {
            catCharacter.setVisualState(state);
            expect(catCharacter.element.classList.contains(`state-${state}`)).toBe(true);
            expect(catCharacter.visualState).toBe(state);
            
            // Verify other states are not present
            states.forEach(otherState => {
                if (otherState !== state) {
                    expect(catCharacter.element.classList.contains(`state-${otherState}`)).toBe(false);
                }
            });
        });
    });
});

// Test Suite: Integration tests
describe('CatCharacter - Integration Tests', () => {
    let catCharacter;

    beforeEach(() => {
        setupDOM();
        catCharacter = new CatCharacter('#cat-character');
    });

    test('should apply animation and then remove it', () => {
        catCharacter.applyAnimation('jump');
        expect(catCharacter.element.classList.contains('animate-jump')).toBe(true);
        
        catCharacter.removeAnimation();
        expect(catCharacter.element.classList.contains('animate-jump')).toBe(false);
    });

    test('should apply animation while in a visual state', () => {
        catCharacter.setVisualState('happy');
        catCharacter.applyAnimation('spin');
        
        expect(catCharacter.element.classList.contains('state-happy')).toBe(true);
        expect(catCharacter.element.classList.contains('animate-spin-cat')).toBe(true);
    });

    test('should change visual state while animation is playing', () => {
        catCharacter.applyAnimation('jump');
        catCharacter.setVisualState('playful');
        
        expect(catCharacter.element.classList.contains('animate-jump')).toBe(true);
        expect(catCharacter.element.classList.contains('state-playful')).toBe(true);
    });

    test('should handle rapid state changes', () => {
        catCharacter.setVisualState('default');
        catCharacter.setVisualState('happy');
        catCharacter.setVisualState('playful');
        catCharacter.setVisualState('default');
        
        expect(catCharacter.element.classList.contains('state-default')).toBe(true);
        expect(catCharacter.element.classList.contains('state-happy')).toBe(false);
        expect(catCharacter.element.classList.contains('state-playful')).toBe(false);
    });

    test('should handle rapid animation changes', () => {
        catCharacter.applyAnimation('jump');
        catCharacter.removeAnimation();
        catCharacter.applyAnimation('spin');
        catCharacter.removeAnimation();
        catCharacter.applyAnimation('blink');
        
        expect(catCharacter.element.classList.contains('animate-blink')).toBe(true);
        expect(catCharacter.element.classList.contains('animate-jump')).toBe(false);
        expect(catCharacter.element.classList.contains('animate-spin-cat')).toBe(false);
    });
});
