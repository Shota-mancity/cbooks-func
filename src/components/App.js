import React from "react";
import HowTo from "./HowTo";
import Search from "./Search";
import Table from "./Table";
import Advertisement from "./Advertisement";
import "../styles.css";

const App = () => {
  return (
    <>
      <header>
        <p>CBOOKS</p>
      </header>
      <div className="conteiner">
        <div class="hamburger-menu">
          <input type="checkbox" id="menu-btn-check" />
          <label for="menu-btn-check" class="menu-btn">
            <span></span>
          </label>
          <div class="menu-content">
            <ul>
              <li>
                <a href="https://cbooks.net/">cBooks</a>
              </li>
              <li>
                <a href="https://cbooks.net/share">cBooks for Share</a>
              </li>
              <li>
                <a href="https://cbooks.net/todays-new-books">
                  Today's new Books
                </a>
              </li>
              <li>
                <a href="https://twitter.com/cBooks_net">Twitter</a>
              </li>
              <li>
                <a href="https://cbooks.net/policy">プライバシーポリシー</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="description-conteiner">
          <h5>書誌データ作成ツール - cBooks</h5>
          <div className="description">
            <p>
              cBooksはISBNから書籍情報を取得できる誰でも利用可能なオンラインツールです。
            </p>
            <p>今後、アップデートや機能の追加を随時行う予定です。</p>
          </div>

          <HowTo />
          <Search />
          <Table />
          <Advertisement />
        </div>
      </div>
      <footer>
        <p>
          cBooksは国立国会図書館サーチ(NDL Search)より書誌情報を取得しています。
        </p>
        <p>
          「国立国会図書館サーチ(NDL Search)：
          <a href="https://iss.ndl.go.jp/">https://iss.ndl.go.jp/</a>」
        </p>
      </footer>
    </>
  );
};

export default App;
