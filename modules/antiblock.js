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
        this.bakedAntiBlock.set(eval(`/${x}/g`), spl.join(conjChar));
        this.bakedAntiBlock.set(
          eval(`/${spl.join("�")}/g`),
          spl.join(conjChar)
        );
      }
      $("div[class='mtm mbm pnpost']").prepend(
        "<button type='button' id='antiblock' class='pn'><span>反屏蔽</span></button>"
      );
      callback(true);
    } catch (e) {
      console.log(e);

      callback(false);
    }
    console.log(this.bakedAntiBlock);
  }

  run(callback) {
    try {
      $("#antiblock").on("click", () => {
        $("#e_switchercheck").attr("value", "0");
        $("#e_switchercheck").attr("checked", "true");
        switchEditor(0);
        $("#e_textarea").val(
          this.replaceAll($("#e_textarea").val(), this.bakedAntiBlock)
        );
        $("input#subject").val(
          this.replaceAll($("input#subject").val(), this.bakedAntiBlock)
        );
      });
      $(document).on("blur", "#postmessage", () => {
        var origin = $("textarea#postmessage").val();

        $("textarea#postmessage").val(
          this.replaceAll(origin, this.bakedAntiBlock)
        );
        glogger.debug("Replaced Value", "AntiBlock");
      });
      $(document).on("blur", "#fastpostmessage", () => {
        var origin = $("textarea#fastpostmessage").val();
        $("textarea#fastpostmessage").val(
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
var blockWords = ["迫害", "广告", "中国", "eeee", "学联"];
var conjChar = "\x00";
