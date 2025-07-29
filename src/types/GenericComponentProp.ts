export type GenericComponentRef = {
  ref: React.Ref<HTMLElement>; // Or a more specific HTML element type
  // Other props
};

export type SavedUserStoriesRef = {
  refresh: () => void;
};
