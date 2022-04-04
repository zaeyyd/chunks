//
//  chunks_appleApp.swift
//  chunks-apple WatchKit Extension
//
//  Created by Zayyed Mansoor on 2022-02-19.
//

import SwiftUI

@main
struct chunks_appleApp: App {
    @SceneBuilder var body: some Scene {
        WindowGroup {
            NavigationView {
                ContentView()
            }
        }

        WKNotificationScene(controller: NotificationController.self, category: "myCategory")
    }
}
