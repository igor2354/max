ymaps.ready(function () {
  let myMap = new ymaps.Map(
    "map",
    {
      center: [52.755967, 41.446183],
      zoom: 16,
      controls: [],
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
  myMap.geoObjects.add(
    new ymaps.Placemark(
      [52.755967, 41.446183],
      {
        iconCaption: "Советская улица, 194Л",
      },
      {
        preset: "islands#redDotIcon",
      }
    )
  );
  myMap.behaviors.disable("scrollZoom");
});
