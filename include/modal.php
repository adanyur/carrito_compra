<input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
    <div class="modal">
      <div class="modal-wrap">
        <div class="modal-head"><h1 class="text-center">carrito</h1></div>
        <div class="modal-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">producto</th>
                <th scope="col">cantidad</th>
                <th scope="col">precio</th>
              <th scope="col">total</th>
              </tr>
            </thead>
            <tbody id="carProductListModal" class="test-scroll">
            </tbody>
          </table>
         </div>
         <div class="modal-footer">
         <button class="btn-add" onclick="carProductList()">Proceed with the payment</button>
         </div>
      </div>
</div>