<template>
  <div style="background-color: rgb(215, 215, 255);">
    <div style="width: 90%; margin: auto;">
      <Header />
      <div style="height: 250px; display: flex;">
        <div ref="poster" style="background-image: url('data:image/png;base64,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'); background-size: cover; height: 100%; width: 100%">
          <div style="align-items: center; display: flex; margin-top: 35px; margin-left: 35px; width: 35%; height: 115px; background-color: rgb(255, 255, 255);">
            <span style="align-self: center; font-size: 54px;" class="material-icons">
              settings
            </span>
            <p style="margin-left: 15px; font-size: 24px;">
              Межрегиональный центр компетенций
              <button class="btn btn-primary">
                строительство
              </button>
            </p>
          </div>
          <div style="margin-left: 35px; margin-top: 15px; width: 50%; display: flex; justify-content: space-around;">
            <button @click="" class="btn btn-primary">
              МЦПК
            </button>
            <button @click="" class="btn btn-primary">
              Путёвка в жизнь
            </button>
            <button @click="" class="btn btn-primary">
              ЗЭМ-1
            </button>
            <button @click="" class="btn btn-primary">
              Ассоциация "НОСТРОЙ"
            </button>
            <button @click="" class="btn btn-primary">
              НОВОСТИ
            </button>
          </div>
        </div>
        
      </div>
      <div style="height: 275px;">
        <div style="display: flex; height: 100%; justify-content: space-between; align-items: center;">
          <span style="position: relative; z-index: 10; width: 45px; height: 45px;" class="btn btn-light material-icons-outlined">
            chevron_left
          </span>
          <div style="height: 100%; flex-direction: row; width: 15%; display: flex; justify-content: space-around; align-items: center;">
            <div style="margin: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
              <img width="175px" src="https://www.tspk-mo.ru/storage/app/media/2021/raspisanie-1536x864.jpg" alt="" />
              <span>
                Электронный журнал школьный портал МО
              </span>
            </div>

            <div style="margin: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
              <img width="175px" src="https://www.tspk-mo.ru/storage/app/media/uploaded-files/nazvaniya-2001%20(2).jpeg" alt="" />
              <span>
                Федеральный проект новые возможности для каждого
              </span>
            </div>
              
            <div style="text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
              <img width="150px" src="https://www.tspk-mo.ru/storage/app/media/uploaded-files/na-sait001.jpeg" alt="" />
              <span>
                Федеральный проект Содействие занятости
              </span>
            </div>

            <div style="text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
              <img width="150px" src="https://www.tspk-mo.ru/storage/app/media/2020/zastavka001.jpeg" alt="" />
              <span>
                Выпускнику
              </span>
            </div>

            <div style="text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
              <img width="125px" src="https://www.tspk-mo.ru/storage/app/media/2021/510-510.jpg" alt="" />
              <span>
                Большая перемена
              </span>
            </div>

            <div style="text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
              <img width="150px" src="https://www.tspk-mo.ru/storage/app/media/2020/obuchenie003.jpeg" alt="" />
              <span>
                Дистанционное обучение
              </span>
            </div>

            <div style="text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
              <img width="75px" src="https://www.tspk-mo.ru/storage/app/media/2021/2print-min-1%20(1).jpg" alt="" />
              <span>
                COVID-19
              </span>
            </div>

          </div>
          <span  style="width: 45px; height: 45px;" class="btn btn-light material-icons-outlined">
            chevron_right
          </span>
        </div>
    
      </div>
      
      <div style="display: flex; justify-content: space-around;">
        <img width="175px" src="https://tspk-mo.ru/themes/mck/assets/images/director.jpg" alt="">
        <p style="margin-left: 45px;">    
          <span style="font-weight: bolder;">
            Приветствуем Вас на официальном сайте ГАПОУ МО «МЦК — Техникум имени С.П. Королева»
          </span>
          
          Техникум имени С.П. Королева – с 2016 г. Межрегиональный центр компетенций в области строительства – призван обеспечить подготовку специалистов в соответствии с мировыми стандартами отрасли и передовыми производственными технологиями.

          Деятельность МЦК является частью общегосударственной программы по модернизации профессионального образования и повышению престижа рабочих и инженерных профессий среди молодежи.
          <span style="float: right; margin-top: 25px; font-weight: bolder;">
            Директор Ласкина Ираида Анатольевна
          </span>
        </p>
      </div>

      <div>
        <h5>
          НОВОСТИ
        </h5>
        <div style="display: flex; justify-content: space-around;">
          <div style="width: 25%; margin: 10px;">
            <img src="https://tspk-mo.ru/storage/app/media/uploaded-files/2909-lesnoe-mnogobore002.jpeg" width="275px" alt="">
            <p>
              29.09.2021
            </p>
            <h6>
              Лесное многоборье
            </h6>
          </div>

          <div style="width: 25%; margin: 10px;">
            <img src="https://tspk-mo.ru/storage/app/media/uploaded-files/2209-vpr002.jpeg" width="275px" alt="">
            <p>
              29.09.2021
            </p>
            <h6>
              Превокурсники написали всероссийские проверочные работы
            </h6>
          </div>

          <div style="width: 25%; margin: 10px;">
            <img src="https://tspk-mo.ru/storage/app/media/uploaded-files/1909-vpr001.jpeg" width="275px" alt="">
            <p>
              29.09.2021
            </p>
            <h6>
              Для студентов СПО
            </h6>
          </div>

        </div>
      </div>

      <div style="margin-top: 75px;">
        <h5 style="text-align: center; color: rgb(0, 0, 255);">
          ПРОЕКТЫ
        </h5>
        <div>
          <div style="display: flex; justify-content: space-around;">
            <div style="display: flex; flex-direction: column; align-items: center; width: 175px;">
              <img src="https://www.tspk-mo.ru/storage/app/media/2021/chernyy.png" width="100px" alt="">
              <button style="height: 100px;" class="btn btn-primary">
                Национальный проект образование
              </button>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; width: 175px;">
              <img src="https://www.tspk-mo.ru/storage/app/media/2020/elearning.png" width="100px" alt="">
              <button style="height: 100px;" class="btn btn-primary">
                Цифровой колледж Подмосковья
              </button>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; width: 175px;">
              <img src="https://www.tspk-mo.ru/storage/app/media/proekt2018/putevka-v-zhizn.png" width="100px" alt="">
              <button style="height: 100px;" class="btn btn-primary">
                Путёвка в жизнь
              </button>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; width: 175px;">
              <img src="https://www.tspk-mo.ru/storage/app/media/proekt2018/%20(1).png" width="100px" alt="">
              <button style="height: 100px;" class="btn btn-primary">
                Региональный центр компетенций(РНК)
              </button>
            </div>
          </div>
          <div style="margin-top: 25px; display: flex; justify-content: space-around;">
            <div style="display: flex; flex-direction: column; align-items: center; width: 175px;">
              <img src="https://www.tspk-mo.ru/storage/app/media/proekt2018/konkurs.png" width="100px" alt="">
              <button style="height: 100px;" class="btn btn-primary">
                Конкурсы и олимпиады
              </button>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; width: 175px;">
              <img src="https://www.tspk-mo.ru/storage/app/media/proekt2018/%20(2).png" width="100px" alt="">
              <button class="btn btn-primary" style="height: 100px;" >
                Многофункциональный центр прикладных квалификаций
              </button>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; width: 175px;">
              <img src="https://www.tspk-mo.ru/storage/app/media/2021/les2021.jpeg" width="100px" alt="">
              <button style="height: 100px;" class="btn btn-primary">
                Лесное многоборье
              </button>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; width: 175px;">
              <img src="https://www.tspk-mo.ru/storage/app/media/2020/global-technical-support.png" width="100px" alt="">
              <button style="height: 100px;" class="btn btn-primary">
                Отзывы об организации
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 50px;">
        <h5 style="text-align: center;">
          Наши партнёры
        </h5>
        <div style="height: 275px;">
          <div style="display: flex; height: 100%; justify-content: space-between; align-items: center;">
            <span style="width: 45px; height: 45px;" class="btn btn-light material-icons-outlined">
              chevron_left
            </span>
            <div style="height: 100%; flex-direction: row; width: 15%; display: flex; justify-content: space-around; align-items: center;">
              <div style="margin: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
                <img width="175px" src="https://tspk-mo.ru/themes/mck/assets/images/logo-knauf.jpg" alt="" />
                <span>
                  ООО КНАУФ ГИБС
                </span>
              </div>

              <div style="margin: 15px; text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
                <img width="175px" src="https://tspk-mo.ru/themes/mck/assets/images/logo-energy.jpg" alt="" />
                <span>
                  Энергия
                </span>
              </div>
                
              <div style="text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
                <img width="150px" src="https://tspk-mo.ru/themes/mck/assets/images/logo-premier.png" alt="" />
                <span>
                  Инвестицинно-строительная компания Премьер
                </span>
              </div>

              <div style="text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
                <img width="150px" src="https://tspk-mo.ru/themes/mck/assets/images/logo-tactical-missiles.png" alt="" />
                <span>
                  ОАО Корпорация Тактическое Ракетное Вооружение
                </span>
              </div>

              <div style="text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
                <img width="125px" src="https://tspk-mo.ru/themes/mck/assets/images/logo-npo-it.png" alt="" />
                <span>
                  Научно-произдственнное объединение иззмерительной техники
                </span>
              </div>

              <div style="text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
                <img width="150px" src="https://tspk-mo.ru/themes/mck/assets/images/logo-building.png" alt="" />
                <span>
                  ООО СтройРегистр
                </span>
              </div>

              <div style="text-align: center; display: flex; flex-direction: column; align-items: center; box-sizing: border-box; padding: 15px; background-color: rgb(255, 255, 255); height: 85%; border: 1px solid rgb(0, 0, 200);">
                <img width="75px" src="https://tspk-mo.ru/themes/mck/assets/images/logo-experimental-plant.png" alt="" />
                <span>
                  ООО Завод Экспериментального Машиностроения
                </span>
              </div>

            </div>
            <span  style="width: 45px; height: 45px;" class="btn btn-light material-icons-outlined">
              chevron_right
            </span>
          </div>
      
        </div>
      </div>

      <div style="text-align: center; margin-top: 50px;">
        <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQuHb56208v3YJKT4QNoYDP9rBL4Px9uXle4rzDDKfogdHEOCWYcaulHJl6lgSBdYxneXaHDc1OPHyN28B_Mbo" width="450px" alt="">
        <p>
          Сообщить о проблеме
          Сообщение. Пилотный проект. Данная форма не предназначена для приема обращений граждан в порядке Федерального закона от 02.05.2006 № 59-ФЗ «О порядке рассмотрения обращений граждан Российской Федерации» и предоставляет возможность направить электронное сообщение в рамках реализации пилотного проекта по внедрению «Единого окна цифровой обратной связи». Ответ на сообщение будет направлен не позднее 8 рабочих дней после дня его регистрации, а по отдельным тематикам – в укороченные сроки.
        </p>
      </div>

      <div>
        
      </div>

      <div >
        <h5 style="text-align: center;">
          СТРУКТУРНЫЕ ПОДРАЗДЕЛЕНИЯ
        </h5>
        <div style="width: 100%; height: 235px; background-color: rgb(5, 215, 215);">

        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'Home',
  data(){
    return {
      cursorOfPoster: -1,
    }
  },
  mounted(){
    setInterval(() => {
      this.cursorOfPoster += 1
      if(this.cursorOfPoster === 2){
        this.$refs.poster.style.backgroundImage = "url('data:image/png;base64,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')"
      } else if(this.cursorOfPoster === 1){
        this.$refs.poster.style.backgroundImage = "url('data:image/jpeg;base64,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')"
      } else if(this.cursorOfPoster === 0){
        this.$refs.poster.style.backgroundImage = "url('data:image/jpeg;base64,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')"
      }

      if(this.cursorOfPoster >= 2){
        this.cursorOfPoster = 0
      }
      
    }, 5000)
  },
  components: {
    Header,
    Footer
  }
}
</script>
