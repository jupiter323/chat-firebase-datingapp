import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { MessagesPage } from '../messages/messages';
import { MenuSidePage } from '../menu-side/menu-side';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { DungeonListingPage } from '../dungeon-listing/dungeon-listing';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { GroupsPage } from '../groups/groups';
// import $ from 'jquery';
/**
 * Generated class for the DungeonFinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
    selector: 'page-dungeon-finder',
    templateUrl: 'dungeon-finder.html',
})
export class DungeonFinderPage {


    map: any = null;
    mapElement: HTMLElement;
    public watch: any;
    public lat: number = 0;
    public lng: number = 0;
    markers: Array<any>;
    constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public zone: NgZone,
        public backgroundGeolocation: BackgroundGeolocation, public toast: ToastController) {
        this.markers = [{ marker: '' }, { content: '' }];

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MapsPage');


        // $('#messagebox').hide();
        // $('#map').show();
        // $('#close_icon').show();
        this.mapElement = document.getElementById('map');
        // console.log(this.mapElement);
        this.loadMap();
        //  this.startTracking();

        // this.loadMap();
        // $('#messagebox').show();
        // $('#map').hide();
        // $('#close_icon').hide();

    }


    loadMap() {

        var that = this;
        this.geolocation.getCurrentPosition().then((position) => {


            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


            let styledMapType = new google.maps.StyledMapType(
                [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.attraction",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.attraction",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.attraction",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.government",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.medical",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.place_of_worship",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.school",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.sports_complex",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#ce1f2f"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ],
                { name: 'Styled Map' });

            let mapOptions = {
                center: latLng,
                zoom: 20,
                // mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControlOptions: {
                    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
                }
            }
            this.map = new google.maps.Map(this.mapElement, mapOptions);
            // console.log(this.map);
            this.map.mapTypes.set('styled_map', styledMapType);
            this.map.setMapTypeId('styled_map');



            let content = "Dungeon";
            this.map.addListener('click', function (event) {
                that.addMarker(event.latLng, content);

            });

            // const mark 3
            let clientlatlng = {

                'lat': -27.362720,
                'lng': 153.057071
            };
            content = "Dungeon1";
            this.addMarker(clientlatlng, content);

            clientlatlng = {

                'lat': -27.364426,
                'lng': 153.056985
            };
            content = "Dungeon2";
            this.addMarker(clientlatlng, content);

            clientlatlng = {

                'lat': -27.365970,
                'lng': 153.059764
            };
            content = "Dungeon3";
            this.addMarker(clientlatlng, content);

            ////current pos marker
            let marker = new google.maps.Marker({
                map: that.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
                icon: 'assets/icon/Available-locations.svg',
            });
            this.addMarker(clientlatlng, '');

            ////////
        }, (err) => {
            console.log(err);
            let toast = this.toast.create({
                message: "please check your Location and GPS setting",
                duration: 4000
            })
            toast.present();

        });

        // let clientlatlng = {

        //   'lat': 55.3780188,
        //   'lng': -3.4359583
        // };
        // let content = "Information!";
        // var that = this;
        // setTimeout(function(){
        //       that.addMarker(clientlatlng, content);

        // }, 1000)

    }

    addMarker(posInfo, info) {
        // let position = new google.maps.LatLng(posInfo['lat'], posInfo['lng']);
        let position = posInfo;
        // var iconBase = 'assets/img/';
        // var icons = {
        //   serviceworker: {
        //     icon: iconBase + 'femaleworkersmall.png'
        //   },
        //   you: {
        //     icon: iconBase + 'profilesmall.png'
        //   }
        // };

        var that = this;
        let marker = new google.maps.Marker({
            map: that.map,
            animation: google.maps.Animation.DROP,
            // label: info,
            position: position,
            icon: 'assets/icon/dungeon-icon-nooutline.svg',
        });


        let markerInfo = ' <h2>THE CHAUTEAX <img src = "assets/icon/star.svg" style = "height:10px;"/><span style = "color:green;font-size:15px;">9.3</span></h2> '
            + '<img src = "assets/img/dungeonIner.png" onclick = "goMeetKinkSters()" style = "height:100px;width:250px;"/><br>'
            + '<img src = "assets/img/photo.png" style = "border-radius:70%;height:50px;"/>'
            + 'Fantastic Dungeon!!!!!!!!!!!!!';
        this.markers.push({ marker: marker, content: markerInfo })

        this.addInfoWindow(marker, markerInfo);


    }


    addInfoWindow(marker, content) {

        let infoWindow = new google.maps.InfoWindow({
            content: content
        });

        // console.log(that.markers.pop().content);
        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });


    }

    // startTracking() {

    //   let config = {
    //     desiredAccuracy: 0,
    //     stationaryRadius: 20,
    //     distanceFilter: 10,
    //     debug: true,
    //     interval: 2000
    //   };

    //   this.backgroundGeolocation.configure(config).subscribe((location) => {

    //     console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

    //     // Run update inside of Angular's zone
    //     this.zone.run(() => {
    //       this.lat = location.latitude;
    //       this.lng = location.longitude;
    //     });

    //   }, (err) => {

    //     console.log(err);

    //   });

    //   // Turn ON the background-geolocation system.
    //   this.backgroundGeolocation.start();


    //   // Foreground Tracking

    //   let options = {
    //     frequency: 3000,
    //     enableHighAccuracy: true
    //   };

    //   this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

    //     console.log(position);

    //      this.zone.run(() => {
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //     });
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //     console.log(this.lat + "--------" + this.lng);

    //   });

    // }

    //  click_fullmap()
    //  {

    //     $('#messagebox').hide();
    //     $('#map').show();
    //     $('#close_icon').show();
    //     this.mapElement = document.getElementById('map');
    //     console.log(this.mapElement);
    //     this.loadMap();
    //     this.startTracking();
    //  }




    // Adds a marker to the map and push to the array.
    //   addMarker(location) {
    //     var marker = new google.maps.Marker({
    //       position: location,
    //       map: map
    //     });
    //     markers.push(marker);
    //   }

    //   // Sets the map on all markers in the array.
    setMapOnAll(map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    }

    //   // Removes the markers from the map, but keeps them in the array.
    clearMarkers() {
        this.setMapOnAll(null);
    }

    //   // Shows any markers currently in the array.
    showMarkers() {
        this.setMapOnAll(this.map);
    }

    // Deletes all markers in the array by removing references to them.
    deleteMarkers() {
        this.clearMarkers();
        this.markers = [];
    }

    goMeetKinkSters() {
        // this.watch.unsubscribe();
        this.navCtrl.pop();
        this.navCtrl.push(MeetKinkStersPage);
    }
    goMessages() {
        this.navCtrl.pop();
        //  this.watch.unsubscribe();
        this.navCtrl.push(MessagesPage);
    }
    goDungeonFinderWalkthorugh() {
        this.navCtrl.pop();
        //this.watch.unsubscribe();
        this.navCtrl.push(DungeonFinderWalkthorughPage);
    }
    goMenuSide() {
        this.navCtrl.pop();
        //this.watch.unsubscribe();
        this.navCtrl.push(MenuSidePage);
    }
    goDungeonListing() {
        this.navCtrl.pop();
        // this.watch.unsubscribe();
        this.navCtrl.push(DungeonListingPage);

    }
    goGroups() {
        this.navCtrl.push(GroupsPage);
    }


}
