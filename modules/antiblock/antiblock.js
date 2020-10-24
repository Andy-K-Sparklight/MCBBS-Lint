class AntiBlock extends MCBBSLintModule {
  bakedAntiBlock = new Map();
  constructor() {
    super("AntiBlock", "加载完成，现在开始迫害吧~");
  }
  load(callback) {
    try {
      for (var x of blockWords) {
        var spl = x.split("");
        console.log(spl);
        this.bakedAntiBlock.set(eval(`/${x}/g`), spl.join("\u0001"));
        this.bakedAntiBlock.set(
          eval(`/${spl.join("�")}/g`),
          spl.join("\u0001")
        );
      }
      callback(true);
    } catch (e) {
      console.log(e);
      callback(false);
    }
    console.log(this.bakedAntiBlock);
  }

  run(callback) {
    try {
      $("div[class='mtm mbm pnpost']").prepend(
        '<button type="button" id="antiblock" class="pn" value="true"><span>反屏蔽处理</span></button>'
      );
      $("#antiblock").on("click", () => {
        console.log("Ready To Replace");
        var origin = document
          .getElementById("e_iframe")
          .contentWindow.document.getElementsByTagName("body")[0].innerHTML;
        console.log(this.replaceAll(origin, this.bakedAntiBlock));
        document
          .getElementById("e_iframe")
          .contentWindow.document.getElementsByTagName(
            "body"
          )[0].innerHTML = this.replaceAll(origin, this.bakedAntiBlock);
        $("input#subject").val(
          this.replaceAll($("input#subject").val(), this.bakedAntiBlock)
        );
      });
      $(document).on("blur", "#postmessage", () => {
        var origin = $("textarea#postmessage").val();
        console.log(this.replaceAll(origin, this.bakedAntiBlock));
        $("textarea#postmessage").val(
          this.replaceAll(origin, this.bakedAntiBlock)
        );
        glogger.debug("Replaced Value", "AntiBlock");
      });
      callback(true);
    } catch (e) {
      console.log(e);
      callback(false);
    }
  }
  runson() {
    if ($("#e_iframe").length > 0) {
      return true;
    }
    if ($("textarea").length > 0) {
      return true;
    }
    return false;
  }
  replaceAll(originIn, regIn) {
    var str = originIn;
    for (var j of regIn.keys()) {
      str = str.replace(j, regIn.get(j));
    }
    return str;
  }
}
var ML_AntiBlock = new AntiBlock();
