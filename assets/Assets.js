export const AudioAssets = {
    beep: require("./beep-08b.mp3"),
    conchShell: require("./Conch-Shell.mp3"),
};

export const getFilePath = (name) => {
    
    return `.${name}`;
  };