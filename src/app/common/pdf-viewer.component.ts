import { Component, OnInit,ViewChild } from '@angular/core';
import { WindowRef } from './WindowRef';


declare var pdfWebViewer:any;

@Component({
  selector: 'pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css','./../../../Content/viewer.css']
})


export class PdfViewerComponent implements OnInit {

 

  src:string ='./pdf-test.pdf';

  constructor(private winRef: WindowRef) { 

   
  }

  ngOnInit() {
      console.log("Here");
      if(!pdfWebViewer.isLoadedPdf) {
        pdfWebViewer.loadPDFViewer();
        pdfWebViewer.isLoadedPdf = true;
      }
     
   }
   openPdf() {
     this.winRef.nativeWindow.PDFViewerApplication.open(this.src);
   }
  

    

}