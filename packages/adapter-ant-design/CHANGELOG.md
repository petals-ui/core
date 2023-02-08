# 更新日志

## 0.0.10 (2023-02-08)

### 缺陷/优化

- 修复 `DataTable` 在 `currentPage` 与 `pageSize` 同时改变时只触发了 `onCurrentChange`。

## 0.0.9 (2022-08-12)

### 特性

- `DataTable` 支持 `density` 属性。

## 0.0.8 (2022-05-23)

### 特性

- `Icon` 组件支持从 [`@ant-design/icons`](https://www.npmjs.com/package/@ant-design/icons) 中引用图标，需要注册 `antd` 这个图标提供者，通过 `<Icon refs="antd:step-backward" />` 的形式使用，如果 `antd` 为默认的图标提供者，则可以直接 `<Icon refs="step-backward" />`，图标引用中没有 `'outlined'`、`'filled'` 或 `'two-tone'` 时会默认使用「线框风格」的图标，具体可使用图标详见[官方文档](https://ant.design/components/icon-cn/#%E5%9B%BE%E6%A0%87%E5%88%97%E8%A1%A8)。
