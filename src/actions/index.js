export const loadPictures = (page) => ({
  type: 'LOAD_PICTURES',
  page
});

export const loadPicturesSuccess = (pictures) => ({
  type: 'LOAD_PICTURES_SUCCEEDED',
  pictures
});

export const toggleLoading = (loading) => ({
  type: 'TOGGLE_LOADING',
  loading
});
