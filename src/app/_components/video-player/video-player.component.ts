import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'video-player',
    templateUrl: 'video-player.component.html',
    styleUrls: ['video-player.component.scss']
})
export class VideoPlayer implements AfterViewInit{
    @HostBinding('class.hidden') get getsource() {
        return this.source == "";
    }
    @HostBinding('class.video-object-fit') get getof() {
        return this.of;
    }
    @HostListener('click') onClick() {
        console.log('click');
        
    }
    @Input('src') source: string = "";
    @Input('object-fit') of: boolean = false;

    @ViewChild('video') video?: ElementRef<HTMLVideoElement>;
    @ViewChild('scrubbar') scrubBar?: ElementRef<HTMLElement>;

    controlsHidden: boolean = false;
    playing: boolean = false;
    fullscreen: boolean = false;
    progress: number = 0;
    duration: number = 0;
    progressPercent: number = 0;
    buffered: number = 0;

    scrubbing: boolean = false;

    volume: number | undefined = 1;
    get volumeIcon() {
        return this.volume && this.volume > 0 ? ( this.volume > 0.33 ? this.volume > 0.66 ? 'volume-up' : 'volume' : 'volume-down' ) : 'volume-mute'
    }
    constructor() {

    }

    ngAfterViewInit() {
        console.log(this.video?.nativeElement);
        let video = this.video?.nativeElement;
        this.volume = video?.volume;
        video?.addEventListener('timeupdate', (ev: Event) => {
            this.onUpdate(ev);
        });
        video?.addEventListener('loadeddata', (ev: Event) => {
            let video = <HTMLVideoElement>ev.target
            this.duration = video.duration;
        });
        let scrubbar = <HTMLElement>this.scrubBar?.nativeElement;
        scrubbar.addEventListener('click', (ev: MouseEvent) => {
            ev.stopPropagation();
            let video = <HTMLVideoElement>this.video?.nativeElement
            let rect = scrubbar.getBoundingClientRect();
            let x = ev.clientX;
            
            let videoPercent = this.duration * (x - rect.x) / rect.width;
            video.currentTime = videoPercent;
        });
        scrubbar.addEventListener('dragstart', (ev: DragEvent) => {
            console.log(ev);
            var img = new Image();
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
            (<DataTransfer>ev.dataTransfer).setDragImage(img, 0, 0);
            // scrubbar.style.cursor = "move";
            this.scrubbing = true;
            return true;
        });
        scrubbar.addEventListener('drag', (ev: DragEvent) => {
            console.log(ev);
            
            return true;
        });
        scrubbar.draggable = true;
    }

    onUpdate(ev: Event) {
        let video = <HTMLVideoElement>ev.target;
        this.progress = video.currentTime;
        this.progressPercent = this.progress * 100 / this.duration;
        // console.log(this.progressPercent);
        
        // console.log(ev);
        
    }

    onPlay(e: Event) {
        console.log('PLAY');
        this.video?.nativeElement.play().then((stat) => {
            console.log(stat);
            
        })
        this.playing = true;
    }

    onPause(e: Event) {
        this.video?.nativeElement.pause();
        this.playing = false;
    }
}