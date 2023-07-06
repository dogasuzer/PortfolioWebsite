import create from 'zustand';

export interface Bubble {
  id: string;
}

interface BubbleStoreState {
  bubbles: Bubble[];
  addBubble: (bubble: Bubble) => void;
  removeBubble: (bubbleId: string) => void;
}

const useBubbleStore = create<BubbleStoreState>(set => ({
  bubbles: [],
  addBubble: bubble => set(state => ({ bubbles: [...state.bubbles, bubble] })),
  removeBubble: bubbleId =>
    set(state => ({
      bubbles: state.bubbles.filter(bubble => bubble.id !== bubbleId)
    }))
}));

export default useBubbleStore;
