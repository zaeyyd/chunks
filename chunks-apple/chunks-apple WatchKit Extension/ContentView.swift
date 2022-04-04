//
//  ContentView.swift
//  chunks-apple WatchKit Extension
//
//  Created by Zayyed Mansoor on 2022-02-19.
//

import SwiftUI

struct ContentView: View {
    
    @State var navNextScreen = false
    @State var timeVal = 0
    var body: some View {
        VStack{
            Text("wyd?").padding()
            ScrollView{
                // TODO: fix weird taskName bug
                NavigationLink(isActive: $navNextScreen, destination: {SecondView(navNextScreen: $navNextScreen, timeVal: timeVal, taskName: "new task")}, label: {Text("new task")})
                NavigationLink(isActive: $navNextScreen, destination: {SecondView(navNextScreen: $navNextScreen, timeVal: timeVal, taskName: "workout")}, label: {Text("workout")})
            }
            
        }
    }
}

struct SecondView: View{
    @Binding var navNextScreen:Bool
    @State var timeVal = 0
    @State var taskName: String

    var body: some View {
        VStack{
            
            // TODO: find out why this print is in infinate loop - with timer
            let _ = print("\(taskName)")
            
            Text(taskName).font(.system(size: 40))
            Text("\(timeVal)").onAppear(){
                Timer.scheduledTimer(withTimeInterval: 1, repeats: true){
                    _ in timeVal += 1
                }
            }
            Button(action: {
                self.navNextScreen = false
                let _ = print("\(timeVal)")
                let _ = print("we doneeee")
            }, label: {Text("end")})
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
