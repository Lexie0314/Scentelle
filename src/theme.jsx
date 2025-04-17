import { Switch, theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#BCCDE2",         // 點綴主色
    colorBgBase: "#4B4B4B",          // 深背景色（類似深咖啡）
    colorTextBase: "#F4F4F4",        // 文字白
    colorTextFooter: "#F4F4F4",
    colorBgFooter: "#4B4B4B",        // 頁腳偏黑灰
    colorNavBarBase: "#4B4B4B",
  },
  components: {
    Button: {
      colorPrimary: "#BCCDE2",
      colorPrimaryHover: "#899FB8",
      colorPrimaryActive: "#899FB8",
    },
    Switch: {
      colorPrimary: "#BCCDE2",
      colorPrimaryHover: "#899FB8",
    },
    Menu: {
      colorItemBg: "#4B4B4B",
      colorItemBgSelected: "#CCD0D8",
      colorItemText: "#F4F4F4",
      colorItemTextSelected: "#1E1C1A",
      colorSubItemBgSelected: "#BCCDE2",
      colorSplit: "#899FB8",
    },
    Drawer: {
      colorBgElevated: "#4B4B4B",
    },
    Modal: {
      colorBgElevated: "#2C2C2C",
    },
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgBase: "#F4F4F4",          // 淺背景色
    colorTextBase: "#4B4B4B",        // 主要文字
    colorNavBarBase: "#BCCDE2",      // 淺藍色導覽列
  },
  components: {
    Button: {
      colorPrimary: "#899FB8",
      colorPrimaryHover: "#CCD0D8",
      colorPrimaryActive: "#899FB8",
    },
    Switch: {
      colorPrimary: "#899FB8",
      colorPrimaryHover: "#BCCDE2",
    },
    Menu: {
      colorItemBgSelected: "#CCD0D8",
      colorItemText: "#4B4B4B",
      colorItemTextSelected: "#1E1C1A",
      colorSubItemBg: "#F4F4F4",
      colorSubItemBgSelected: "#BCCDE2",
      colorSplit: "#BCCDE2",
    },
    Modal: {
      colorBgElevated: "#FFFFFF",
    },
  },
};

export { lightTheme, darkTheme };
