import {style} from 'typestyle';

export const repoStyle = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'var(--jp-layout-color1)',
  lineHeight: 'var(--jp-private-running-item-height)',
  minHeight: '35px'
});

export const repoPathStyle = style({
  fontSize: 'var(--jp-ui-font-size1)',
  marginRight: '4px',
  paddingLeft: '4px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  lineHeight: '33px',
});

export const repoRefreshStyle = style({
  width: 'var(--jp-private-running-button-width)',
  background: 'var(--jp-layout-color1)',
  border: 'none',
  backgroundImage: 'var(--jp-icon-refresh)',
  backgroundSize: '16px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  boxSizing: 'border-box',
  outline: 'none',
  padding: '0px 6px',
  margin: 'auto 5px auto auto',
  height: '24px',

  $nest: {
    '&:hover': {
      backgroundColor: 'var(--jp-layout-color2)'
    },
    '&:active': {
      backgroundColor: 'var(--jp-layout-color3)',
    }
  }
});

export function gitPushStyle(isLightTheme: string) {

  let backgroundImage;
  if (isLightTheme === undefined || isLightTheme === 'true') {
    backgroundImage = 'var(--jp-icon-git-push)';
  } else {
    backgroundImage = 'var(--jp-icon-git-push-white)';
  }
  return style({
    width: 'var(--jp-private-running-button-width)',
    background: 'var(--jp-layout-color1)',
    border: 'none',
    backgroundImage: backgroundImage,
    backgroundSize: '16px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    boxSizing: 'border-box',
    outline: 'none',
    padding: '0px 6px',
    margin: 'auto 5px auto auto',
    height: '24px',

    $nest: {
      '&:hover': {
        backgroundColor: 'var(--jp-layout-color2)'
      },
      '&:active': {
        backgroundColor: 'var(--jp-layout-color3)',
      }
    }
  });
}

export function gitPullStyle(isLightTheme: string) {

  let backgroundImage;
  if (isLightTheme === undefined || isLightTheme === 'true') {
    backgroundImage = 'var(--jp-icon-git-pull)';
  } else {
    backgroundImage = 'var(--jp-icon-git-pull-white)';
  }
  return style({
    width: 'var(--jp-private-running-button-width)',
    background: 'var(--jp-layout-color1)',
    border: 'none',
    backgroundImage: backgroundImage,
    backgroundSize: '16px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    boxSizing: 'border-box',
    outline: 'none',
    padding: '0px 6px',
    margin: 'auto 5px auto auto',
    height: '24px',

    $nest: {
      '&:hover': {
        backgroundColor: 'var(--jp-layout-color2)'
      },
      '&:active': {
        backgroundColor: 'var(--jp-layout-color3)',
      }
    }
  });
}