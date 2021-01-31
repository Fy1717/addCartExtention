function runCodeOnConsole(codeStr) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (activeTabs) {
    chrome.tabs.executeScript(activeTabs[0].id, {
      code: codeStr
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('showModalBtn').addEventListener('click', function () {
    if (document.getElementById('testAreaForAddToCart') === null) {
      var dataScript = document.createElement('div');

      dataScript.id = 'testAreaForAddToCart';
      dataScript.innerHTML = `
      <div id="mainProductDiv" class="mySlidesTester" 
        style="text-align: center; background-color: #fff; border: 6px solid black; padding: 5px; margin: auto; margin-left: auto; 
        margin-right: auto; border-radius: 6px; height: 300px; width: 275px; margin-top: 3%">
        
        <div id="productImage">
          <div>
              <a href="https://www.bizimtoptan.com.tr/domestos-ultra-camasir-suyu-dag-esintisi-810-g">
                  <img style="margin: auto; size: 100px; height: 150px"
                      src="https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/0096991_0.png">
              </a>
          </div>
        </div>
  
        <h2 class="productName">
          Çaykur Kamelya 1 kg
        </h2>
  
        <p class="product-price">24,5 TL</p>
  
        <button id="addToCartButtonTestVairo"
          style="padding: 10px; background-color: #4CAF50; border: none; color: white; padding: 10px; margin: 2px 2px; cursor: pointer; display: inline-block;  text-decoration: none; border-radius: 10px;">
            ADD TO CART
        </button>
      </div>`;

      var addedCode = document.body.appendChild(dataScript);
      document.body.appendChild(dataScript)

      runCodeOnConsole(addedCode);
    }
  });
}, false);