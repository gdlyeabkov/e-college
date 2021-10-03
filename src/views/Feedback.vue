<template>
  <div>
    <div style="display: flex; justify-content: space-around;">
      <span style="color: rgb(200, 200, 200); font-weight: bolder; font-size: 18px;">
        Техническая поддержка МЦК Техникум им. С.П. Королева
      </span>
      <div style="display: flex; align-items: center;">
        <span style="color: rgb(0, 0, 255);">
          Русский
        </span>
        <span class="material-icons">
          expand_more
        </span>
      </div>
    </div>
    <hr />
    <div style="display: flex; align-items: center; justify-content: center;">
      <span style="color: rgb(0, 0, 255); font-size: 12px;">
        МЦК Техникум им. С.П. Королева
      </span>
      <span style="font-size: 12px; margin: 0px 5px;" class="material-icons">
        chevron_right
      </span>
      <span style="color: rgb(0, 0, 255); font-size: 12px;">
        Техническая поддержка МЦК Техникум им. С.П. Королева
      </span>
      <span style="font-size: 12px; margin: 0px 5px;" class="material-icons">
        chevron_right
      </span>
      <span style="color: rgb(0, 0, 255); font-size: 12px;">
        Создать новую заявку
      </span>
      <span style="font-size: 12px; margin: 0px 5px;" class="material-icons">
        chevron_right
      </span>
      <span style="font-size: 12px;">
        Обратная связь (МЦК)
      </span>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 75px;">
      <div style="display: flex;">
        <span style="color: rgb(175, 175, 175); margin: 0px 15px;" class="material-icons-outlined">
          note_add
        </span>
        <span style="font-size: 18px; font-weight: bolder; color: rgb(0, 0, 135);">
          Создать новую заявку
        </span>
      </div>
      <span style="color: rgb(175, 175, 175); font-size: 10px;">
        Обязательные поля отмечены
        <span style="color: rgb(255, 0, 0); font-size: 12px;">*</span>
      </span>
    </div>
    
    <div style="display: flex; justify-content: center;">
      <div style="width: 50%; box-shadow: 0 0 5px rgb(200, 200, 200); box-sizing: border-box; padding: 25px;">
        <label for="" style="color: rgb(175, 175, 175);">Фамилия, Имя, Отчество</label>
        <span style="color: rgb(255, 0, 0); font-size: 12px;">*</span>
        <input class="form-control w-25" type="text">
        <label for="" style="color: rgb(175, 175, 175);">E-mail</label>
        <span style="color: rgb(255, 0, 0); font-size: 12px;">*</span>
        <input class="form-control w-25" type="text">
        <label for="" style="color: rgb(175, 175, 175);">Тема заявки</label>
        <span style="color: rgb(255, 0, 0); font-size: 12px;">*</span>
        <input class="form-control w-25" type="text">
        <label for="" style="color: rgb(175, 175, 175);">Опишите проблему</label>
        <span style="color: rgb(255, 0, 0); font-size: 12px;">*</span>
        <input class="form-control w-25" type="text">
        <hr />
        <div style="display: flex;">
          <span style="color: rgb(175, 175, 175);">
            Вложения: 
          </span>
          <div style="margin-left: 35px;">
            <input type="file" />
            <input type="file" />
            <input type="file" />
            <input type="file" />
            <div style="color: rgb(175, 175, 175); display: flex; align-items: center;">
              <span >
                Максимальное количество вложений: 4
              </span>
              <span class="material-icons-outlined" style="margin-left: 15px; font-size: 16px;">
                info
              </span>
            </div>
            
          </div>
        </div>
        <hr />
        <div style="display: flex; flex-direction: column; align-items: center;">
          <span style="font-weight: bolder;">
            Защита от спама
          </span>
          <img src="https://help.tspk-mo.ru/print_sec_img.php?95318" width="175px" alt="">
          <div style="display: flex; width: 50%; text-align: center;">
            <span style="color: rgb(175, 175, 175);">
              Введите число, которое Вы видите на картинке ниже.
            </span>
            <div style="display: flex;">
              <span style="color: rgb(255, 0, 0);">
                *
              </span>
              <span style="color: rgb(175, 175, 175);" class="material-icons-outlined">
                refresh
              </span>
            </div>
          </div>
          <input class="form-control w-50" type="text">
        </div>
        <hr />
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div style="border: 1px solid rgb(0, 0, 255); width: 90%; height: 200px; background-color: rgb(215, 255, 255);">

          </div>
          <button class="btn btn-primary w-25" style="margin-top: 15px;">
            Отправить заявку
          </button>
        </div>
      </div>
    </div>
  
    <p style="text-align: center;">
      Powered by Help Desk Software HESK, in partnership with SysAid Technologies
    </p>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>