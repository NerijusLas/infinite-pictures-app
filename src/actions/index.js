export const loadPictures = () => ({
  type: 'LOAD_PICTURES'
});

export const loadPicturesSuccess = (pictures) => ({
  type: 'LOAD_PICTURES_SUCCEEDED',
  pictures
});

export const toggleLoading = (loading) => ({
  type: 'TOGGLE_LOADING',
  loading
});
