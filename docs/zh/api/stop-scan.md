# 停止扫描 （stopScan）

连续扫码界面打开后，可以通过此方法主动关闭界面

## 参数
无

## 示例

```javascript
 window.BarcodeScanner.stopScan(
    function (response) {
        alert(JSON.stringify(response));
    },
    function (error) {
        alert(JSON.stringify(error));
    }
);
```



